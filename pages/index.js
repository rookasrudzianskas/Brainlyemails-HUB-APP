import Head from 'next/head'
import HomeScreen from "../screens/HomeScreen";
import {useEffect, useLayoutEffect, useReducer, useRef, useState} from "react";
import useScrollPosition from '@react-hook/window-scroll'



export default function Home() {
  return (
      <div className="bg-black h-screen scrollbar-hide">
        <Head>
          <title>👋 Brainlyemails</title>
          <link rel="icon" href="../assets/HomeScreen/images/homeScreen_header.png" />
        </Head>

        <main>
          <div className="text-white">
            <HomeScreen />
          </div>

        </main>


      </div>
  )
}
