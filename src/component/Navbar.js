import React from 'react' 
import '../App.css';

const Navbar = () => {
  return (

    <div className='navbar' > 

        <div className='logo'>Logo</div> 
        <div className='buttonFamily'>
            <button>Menu </button> 
            <button>Search </button> 
            <input type='search' className='searcbar' placeholder='Search'/> 
            <button>button1</button> 
            <button>button2</button> 
            <button>button3</button> 
            <button>button4 </button> 
        </div>
    </div> 

  )
}

export default Navbar
