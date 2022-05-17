import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { HomeIcon,SearchIcon,AdjustmentsIcon,BellIcon,ShareIcon,UserCircleIcon } from '@heroicons/react/solid'

function Header() {
  return (
      <header className="flex flex-col sm:flex-row m-6 justify-between items-center">
          <div className ="flex flex-grow justify-evenly max-w-4xl">
              <HeaderItem title='home' Icon={HomeIcon} />
              <HeaderItem title='Search' Icon={SearchIcon} />
              <HeaderItem title='settings' Icon={AdjustmentsIcon} />
              <HeaderItem title='Notifications' Icon={BellIcon} />
              <HeaderItem title='Share' Icon={ShareIcon} />
              <HeaderItem title='Profile' Icon={UserCircleIcon} />
              
          </div>
        
          <Image
              className = "object-contain"
              src="https://purepng.com/public/uploads/large/91508179361jzh7ndfvrgzggmysdztmoucjlludabdmv9hubvfkf8am4s6offj6zfzkfo58nluyzn8zyopdwobavqxw3kl0tuc2u6yarvyxrutd.png" width={100} height={100}/>
          
    </header>
  )
}

export default Header
