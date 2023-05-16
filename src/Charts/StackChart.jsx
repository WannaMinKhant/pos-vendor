import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Avatar } from 'flowbite-react';
import { BsFillPersonCheckFill,BsFillPersonXFill} from 'react-icons/bs'

const StackChart = () => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
          },
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
              name: 'Page E',
              uv: 1890,
              pv: 4800,
              amt: 2181,
            },
            {
              name: 'Page F',
              uv: 2390,
              pv: 3800,
              amt: 2500,
            },
            {
              name: 'Page G',
              uv: 3490,
              pv: 4300,
              amt: 2100,
            },
    ]

    const shops = [
        {
            name:'AOC',
            status: false,
        },
        {
            name:'BOC',
            status: false,
        },
    
        {
            name:'COC',
            status: true,
        },

        {
            name:'DOC',
            status: false,
        },
    ]


  return (
    <div className='w-full flex flex-col md:flex-row py-6 bg-gray-200 my-4 rounded-md shadow-md'>
       
        <div style={{ width: "80%", height: 400 }}>
            <ResponsiveContainer>
                <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        <div className='max-h-[400px] bg-slate-300 flex-1 rounded-lg shadow-md overflow-y-auto scrollbar-hide'>
            <ul className=''>
               { shops.map((d)=>{
                const shopName = d.name[0]
                return (
                    <li key={d.name} className="flex flex-row justify-between py-4 px-6">
                    <div className='flex flex-row items-center text-sm'><Avatar rounded placeholderInitials={shopName} bordered color={'success'}/><span className='px-4'>{d.name}</span> 
                    </div>
                    <span className={`${d.status ? 'text-green-600 bg-green-300' : 'text-red-700 bg-red-300'} px-4 py-2 rounded-lg text-sm`}>{ d.status ? <BsFillPersonCheckFill size={20}/> : <BsFillPersonXFill size={20}/>}</span>
                
                </li>
                )}
                
               )}
            </ul>
        </div>
    </div>
  )
}

export default StackChart


          
