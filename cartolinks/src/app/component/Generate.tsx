import React from 'react'
import { ChevronDown, Image, Video, Gavel, Pencil, MicVocal, PersonStanding, RefreshCcw, Scale, Wallet } from 'lucide-react'

interface GenerateProps {
  darkMode: boolean;
}

const Generate: React.FC<GenerateProps> = ({ darkMode }) => {
    const list = [
        {
            id: 1,
            icon : Image,
            title: 'Image',
            new: 'New',
            text: 'Generate images with custom styles in flux and ideogram'
        },
    {
      id: 2,
      icon: Video,
      title: 'Video',
      text: 'Generate videos with hallu, pica, runway, luma and more.'
    },
    {
      id: 3,
      icon: Gavel,
      title: 'Realtime',
      text: 'Realtime AI rendering on a canvas. Instant feedback loops'
    },
    {
      id: 4,
      icon: Gavel,
      title: 'Ehnancer',
      new: 'New',
      text: 'Lipscale and enhance images and videos up to 22k.'
    },
    {
      id: 5,
      icon: Pencil,
      title: 'Edit',
      new: 'New',
      text: 'Add objexts, change style, or expand photos and generations.'
    },
     {
      id: 6,
      icon: MicVocal,
      title: 'Video Lipsync',
      new: 'New',
      text: 'Lip sync any video to any audio'
    },
     {
      id: 7,
      icon: PersonStanding,
      title: 'Motion Transfer',
      new: 'New',
      text: 'Tranfer motion to images and animate characters.'
    },
    

    ]
  return (
    <div className='p-4 px-5'>
      <div className='flex flex-row justify-between items-center mb-5'>
        <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Generate</h2>
        <div className='flex flex-row items-center text-sm'><ChevronDown color="#2462f1ff" className='mt-1 ' size={20}/> <span className='text-[#2462f1ff]'>Show all</span></div>
      </div>
        <div className='grid grid-cols-4 gap-5'>
          {list.map((item) => (
            <div key={item.id} className='flex flex-row items-center gap-2'>
              <div className='bg-black rounded-xl p-2 py-3'><item.icon color='white' /></div>
              <div className='flex flex-row justify-between w-full'>
                <div>
                <div className='flex flex-row gap-2 '><h4 className={`font-semibold text-sm  ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</h4>{item.new && <span className='text-xs bg-blue-600 text-white px-2 mt-1 h-4 rounded-2xl'>{item.new}</span>}</div>
                <p className='text-xs w-11/12 text-gray-400 '>{item.text}</p>
                </div>
                <div className='mt-6 bg-gray-200 p-1 px-3 rounded-2xl text-sm cursor-pointer'>Open</div>
              </div>
              
            </div>
          ))}
          <div>
              
              <div className='flex flex-row items-center gap-2'>
                <div className='bg-black rounded-xl p-2 py-3'><RefreshCcw color='white' /></div>
                <div className='flex flex-row justify-between w-full'>
                  <div>
                <h4 className={`font-semibold text-sm  ${darkMode ? 'text-white' : 'text-black'}`}>Train</h4>
                <p className='text-xs w-11/12 text-gray-400 '>Teach people to replicate your style, products, or characters</p>
                
              </div>
              <div  className='mt-6 bg-gray-200 p-1 px-3 rounded-2xl text-sm cursor-pointer'>Open</div>
              </div>
            </div>
        </div>
    </div>

    <div className='flex flex-row justify-between items-center mt-12'>
      <div><h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Gallery</h2></div>
      <div className='flex flex-row gap-2'>
        <div className='flex flex-row bg-gray-200 rounded-xl p-1 px-2 gap-2 text-sm cursor-pointer'><Scale size={20} /> <span>Legal</span></div>
        <div className='flex flex-row bg-gray-200 rounded-xl p-1 px-2 gap-2 text-sm cursor-pointer'><Wallet size={20}/> <span>Pricing</span></div>
      </div>
    </div>
    </div>
  )
}

export default Generate;