

function HeaderItem({Icon,title }) {
    return (
        <div className=" flex flex-col cursor-pointer items-center group w-15 sm:w-35
        ">
            <Icon className="h-8 mb-1 group-hover:animate-spin" />
            <p className="opacity-0 group-hover:opacity-100">{title}</p>
      </div>
    
  )
}

export default HeaderItem