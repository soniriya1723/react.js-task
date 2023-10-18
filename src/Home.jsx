import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart,Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Sector  } 
 from 'recharts';

 import {MdAttachMoney, MdArrowUpward, MdOutlineArrowUpward,MdShoppingBasket ,MdArrowDownward,
    MdOutlineAccountBalanceWallet,MdOutlineAutoGraph } from "react-icons/md";

    
 

function Home() {

    const data = [
        {
          name: 'Jan',
          uv: 4000,
         
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 3000,
        
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 2000,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 2780,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 1890,
          amt: 2181,
        },
        {
          name: 'June',
          uv: 2390,
          amt: 2500,
        },
        {
          name: 'July',
          uv: 3490,
          amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            amt: 2100,
          },
          {
            name: 'Sep',
            uv: 3490,
            amt: 2100,
          },
          {
            name: 'Oct',
            uv: 3490,
            amt: 2100,
          },
          {
            name: 'Nov',
            uv: 3490,
            amt: 2100,
          },
          {
            name: 'Dec',
            uv: 3490,
            amt: 2100,
          },

        
      ];


      const ndata = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
      ];
     
      const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];




      

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>

                    <MdAttachMoney className='card_icon'/>
                    <pre>
                    {'Earning\n$  198K\n'}<MdOutlineArrowUpward className='up'/>{' 37.8% this month'}
                  </pre>        
                </div>
               
               
                </div>
            <div className='card'>
            <div className='card-inner'>

            <MdShoppingBasket className='card_icon'/>
            <pre>
            {'Orders\n$  2.4K\n'}<MdArrowDownward className='down'/>{' 2% this month'}
          </pre>        
        </div>
        </div>
            <div className='card'>
            <div className='card-inner'>

            <MdOutlineAccountBalanceWallet className='card_icon'/>
            <pre>
            {'Balance\n$  2.4K\n'}<MdArrowDownward className='down'/>{' 2% this month'}
          </pre>        
        </div>
            </div>
            <div className='card'>
            <div className='card-inner'>

            <MdOutlineAutoGraph className='card_icon'/>
            <pre>
            {'Total Sales\n$  89K\n'}<MdOutlineArrowUpward className='up'/>{' 11% this month'}
          </pre>        
        </div>
            </div>
        </div>






<div className='chart-text'>
<h3>Overview</h3>
<span>Monthly Earning</span>
</div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
              
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                

                    
            </ResponsiveContainer>


            <ResponsiveContainer>

            <PieChart  width={800} height={400}>
            <Pie 

           
              data={ndata}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
            
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
           
          </PieChart></ResponsiveContainer>


            

        </div>

<br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

<h3>Product Sell</h3>

        <div class="header_fixed">
        <table>
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Total Sale</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                    <img src='https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070'/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                    <img src='https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070'/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                    <img src='https://images.unsplash.com/photo-1587307307189-0354b351e9e1?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2049'/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>
                    <img src='https://images.unsplash.com/photo-1612814266697-e5814f3063cf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071'/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                    </tr>
                <tr>
                    <td>5</td>
                    <td>
                    <img src='https://media.istockphoto.com/id/92548749/photo/six-inks-printer.jpg?s=1024x1024&w=is&k=20&c=nv4v8QBgqwiBLxXu39MyBHl_U0oj4JAjC8-JYpgRiQA='/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                    <img src='https://media.istockphoto.com/id/1407268363/photo/office-multifunction-printer-isolated.jpg?s=1024x1024&w=is&k=20&c=Lnb7u2MNSc6AYhxUYAwSm-lYY6wbyTVIJGyj21OchxM='/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                    <img src='https://media.istockphoto.com/id/1415976376/photo/copier-printer-close-up-hand-office-man-press-copy-button-on-panel-to-using-the-copier-or.jpg?s=1024x1024&w=is&k=20&c=3J2njJ7pRLN_IlUrMBErVKSfPIpl3_YTH3_oNia8_0M='/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>
                    <img src='https://images.unsplash.com/photo-1510511336377-1a9caa095849?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887'/>
                    </td>
                    <td>Printer</td>
                    <td>65</td>
                    <td>60000</td>
                    <td>40</td>
                </tr>
            </tbody>
        </table>
    </div>





    </main>


    









    
  )
}

export default Home