'use client'

import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import useLocalStorage from "@/hooks/use-local-storage";
import {useRouter} from "next/navigation";
import GreetingsLayout from "@/layouts/greetings-layout";
import RickrollLayout from "@/layouts/rickroll-layout";
import AudioRequest from "@/components/audio-request";

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const [displayMode, setDisplayMode] = useLocalStorage('display-mode', 'rickroll')
  const [audioAllowed, setAudioAllowed] = useState(false);
  const audio = displayMode === 'greetings' ? new Audio('/greetings.mp3') : new Audio('/rickroll.mp3')

  const Layout = displayMode === 'greetings' ? GreetingsLayout : RickrollLayout;

  useEffect(() => {
    if (searchParams.get('box')) {
      setDisplayMode('greetings')
      router.replace('/')
    }
  }, [router, searchParams, setDisplayMode])

  useEffect(() => {
    if (audioAllowed) {
      audio.volume = 0.8
      audio.preload = "none"
      audio.play()
    }
  }, [audio, displayMode, audioAllowed]);

  return (
      <Layout>
        <AudioRequest allowed={audioAllowed} onAllowed={() => setAudioAllowed(true)}>
          <div
              className="z-10 text-base absolute top-5 left-5 rounded-lg border border-transparent px-1 py-1 max-sm:bg-black max-sm:bg-opacity-60 text-center">
            <div
                className="font-silkscreen text-lg max-sm:text-base text-amber-50 lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a>
                By Secret Santa 🎅🏻
              </a>
            </div>
          </div>
        </AudioRequest>
      </Layout>
  )
}
