function ParentFilterDiv_component() {
  return (
      <div className="relative bg-gray-200 rounded-md w-20 h-20 overflow-hidden">
          <img
              className="object-cover object-center w-full h-full"
              src="https://media.istockphoto.com/id/490431110/photo/north-american-bison.jpg?s=612x612&w=is&k=20&c=pZZIWTUZxS424eGRbqMeBHVE-gJM_ggHgfSUvS85hbs="
              alt=""
          />
          <div className="absolute bottom-0 w-full left-0 bg-gray-100 bg-opacity-50 text-black p-1">
              <p className="font-semibold text-sm text-gray-800">गाय</p>
          </div>
      </div>

  )
}

export default ParentFilterDiv_component