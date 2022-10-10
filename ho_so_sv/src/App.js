import './App.css';

function App() {
  return (
  <div>
    <div className='
    w-[100%] h-[70px]
    bg-[url("https://act.hoyolab.com/ys/event/signin-sea-v3/images/index-bg.1c31f3bf.png")]
    grid grid-cols-6
    '
    >
    
      <div className='
      ml-[25%]
      text-center 
      w-[100px] h-[70px] 
      text-[20px] pt-[9%] 
      bg-slate-
      '>
        <b>LOGO</b>
      </div>
      <div className='
      w-[800px] h-[70px] 
      text-[20px] pt-[9%] 
      bg-slate-
      '>
        <b>Tên Trường</b>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className='
      text-center 
      w-[100px] h-[70px] 
      text-[20px] pt-[9%] 
      bg-slate- 
      '>
        <b>
          <button>
            LOGIN
          </button>
        </b>
      </div>

    </div>
    {/* Menu */}
    <div className='w-[100%] h-[55px] bg-gradient-to-b via-slate-600 from-blue-900 grid grid-cols-7'>
      <div className='border-t-[1px] border-r-[1px] border-l-[1px] hover:border-[2px] border-solid cursor-pointer text-center text-lime-100'>
        <b><u>Trang Chủ</u></b>
      </div>
      <div className='border-t-[1px] border-r-[1px] border-l-[1px] hover:border-[2px] border-solid cursor-pointer text-center text-lime-100'>
        <b><u>Tiện Ích</u></b>
      </div>
      <div className='border-t-[1px] border-r-[1px] border-l-[1px] hover:border-[2px] border-solid cursor-pointer text-center text-lime-100'>
        <b><u>Thông Tin</u></b>
      </div>
      <div className='border-t-[1px] border-r-[1px] border-l-[1px] hover:border-[2px] border-solid cursor-pointer text-center text-lime-100'>
        <b><u>Thời Khóa Biểu</u></b>
      </div>
      <div className='border-t-[1px] border-r-[1px] border-l-[1px] hover:border-[2px] border-solid cursor-pointer text-center text-lime-100'>
        <b><u>Kết Quả Học Tập</u></b>
      </div>
      <div className='border-t-[1px] border-r-[1px] border-l-[1px] hover:border-[2px] border-solid cursor-pointer text-center text-lime-100'>
        <b><u>Thông Tin TỐt Nghiệp</u></b>
      </div>
      <div className='border-t-[1px] border-r-[1px] border-l-[1px] hover:border-[2px] border-solid cursor-pointer text-center text-lime-100'>
        <b><u>Khảo Sát</u></b>
      </div>
    </div>
  </div>
  

  );
}

export default App;
