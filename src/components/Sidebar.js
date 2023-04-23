import React from 'react'
import CustomCard from '../reuse/card.js'
import './Sidebar.css'

function Sidebar() {

  let trending = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi",
      title: "3 Things",
      text: "Express Audio"
    },
    {
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS34rdkkaNIoasAjwIWabbYKW1GW1jEGZmM4M9JVhSlWfQ9jdg",
      title: "Get to know",
      text: "BTS"
    },
    {
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
      title: "3 Things",
      text: "Express Audio"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXa01mKYs6KrrwaaIQcIMcU8MagIvLLTRfXxZsOrxRMJ30pw",
      title: "3 Things",
      text: "Express Audio"
    },
    {
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRsN_3AiaGn304UjOgqcAoOWLSU6eEShk-STkmYAhpR8DE3D58",
      title: "3 Things",
      text: "Express Audio"
    }
  ]
  return (
    <div className='middle-container'>
      <h3>Trending Today</h3>
      <div className='trending-cards'>
      {
        trending.map((item) => <CustomCard image={item.image} title={item.title} text={item.text} />)
      } 
      </div> 
      <div className='freq-lis'>
      <h3>Frequently Listned</h3>
      <div className='freq-lis-card'>
      <CustomCard image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRJ4Vhxda1hon2jxVsuug7BnU3ynjKyHwuDLqiisKROE3jIM-D5" 
      title="3 Things" 
      text="Express Audio" 
      />  
      <CustomCard image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxtjA5WeVT8wIi0fF1TT1tnFEDw8G_phhB5xXPfMQOBVLTuycF" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ8HKYBo3E_YmylHWV8GF21IJMhXcZTB5vyTj1SINt9lRaYa9U" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE25ePzLSmlWrYNZGS6z_5M2QjPkLAla7ciGDowtkCZCBQ3ts" 
      title="3 Things" 
      text="Express Audio" 
      /> 
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />  
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      </div>
      </div>

      <div className='fav-lis'>
      <h3>Favorites</h3>
      <div className='fav-lis-card'>
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />  
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      /> 
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />  
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      <CustomCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi86SxT_PPQPRaz0bdr4ZOLRSyDT2DYYwY94FKMSiBl_It8BRi" 
      title="3 Things" 
      text="Express Audio" 
      />
      </div>
      </div>
    </div>
  )
}

export default Sidebar