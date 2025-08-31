import React from 'react'
import { IconsManifest } from 'react-icons'

import{
  MdHome,
  MdOutlineSlowMotionVideo,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
}from 'react-icons/md'

import {LuThumbsUp} from 'react-icons/lu'

const Sidebar = () => {
  const mainLinks =  [
    {
      icon : <MdHome className='text-xl'/>,
      name :'Home'
    },
    {
      icon: <MdOutlineSlowMotionVideo className='text-xl'/>,
      name : 'Shorts'
    },
    {
      icon : <MdOutlineSubscriptions className='text-xl'/>,
      name : 'Subscriptions'
    }
  ]

  const otherLinks =[
    {
      icon: <MdOutlineVideoLibrary className='text-xl'/>,
      name : 'Library'
    },
    {
      icon:<MdHistory className='text-xl'/>,
      name: 'History'
    },
    {
      icon : <MdOutlineWatchLater className='text-xl'/>,
      name: 'Watch later'
    },
    {
      icon :<LuThumbsUp className='text-xl'/>,
      name: 'Liked videos'
    }
  ]

  return (
    <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col border-b-2 border-gray-500 p-2'>
        {mainLinks.map(
          ({icon, name}) => {
            return(
              <li key = {name} className={`pl-6 py-3 hover:bg-zinc-600 hover:cursor-pointer ${name === "Home"?"bg-slate-600" : " "} rounded-xl`}>
                <a href='#' className='flex items-center gap-5'>{icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          }
        )}
      </ul>
      <ul className='flex flex-col border-b-1 border-gray-800'>
        {otherLinks.map(
          ({icon, name}) => {
            return(
              <li key = {name} className={`pl-6 py-3 hover:bg-zinc-600 hover:cursor-pointer ${name === "Home"?"bg-slate-600" : " "} rounded-xl`}>
                <a href='#' className='flex items-center gap-5'>{icon}
                  <span className='text-sm tracking-wider'>{name}</span>
                </a>
              </li>
            )
          }
        )}
      </ul>
    </div>
  )
}

export default Sidebar
