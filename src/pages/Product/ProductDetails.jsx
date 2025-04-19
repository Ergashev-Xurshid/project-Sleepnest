import { useParams } from 'react-router-dom';
import { products } from '../../utils/productsCards';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { LiaStarSolid } from "react-icons/lia";

function ProductDetails() {
  const { t } = useTranslation()

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-xl mt-10">Mahsulot topilmadi</h2>;
  }

  const {
    titleKey,
    img,
    category,
    details = {}
  } = product;


  // img zoom 
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setPosition({ x, y })
  }
  
  // star
  const [isRating, setRating] = useState(0);

  // add Reviews

  useEffect(() => {
    const savedReviews = localStorage.getItem(`reviewsData_${id}`);
    if (savedReviews) {
      setReviewsData(JSON.parse(savedReviews));
    }
  }, [id]);



  const [reviewsData, setReviewsData] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    rating: isRating,
    message: "",
    email:"",
    date: new Date().toLocaleString()
  })

  const formValue = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const addReviews = (e) => {
    e.preventDefault();
    const { name, rating, message, date } = formData;
    const newReview = {
      name,
      rating,
      message,
      date: new Date().toLocaleString()
    };
  
    const updatedReviews = [...reviewsData, newReview];
    setReviewsData(updatedReviews);
  

    localStorage.setItem(`reviewsData_${id}`, JSON.stringify(updatedReviews));
  

    setFormData({
      name: "",
      rating: 0,
      message: "",
      email: ""
    });
  };
  return (
    <div className='w-full max-w-[1480px] mx-auto px-4 lg:px-[20px]  pt-[140px] ' >
      <div className='flex  gap-[30px]'>
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className='w-[50%] relative overflow-hidden rounded-xl'>
          <img
            src={img}
            alt={titleKey}
            className="absolute top-0 left-0 w-full  shadow-md h-full mb-6 object-cover transition-transform duration-300"
            style={{
              transform: isHovering ? `scale(2)` : `scale(1)`,
              transformOrigin: `${position.x}% ${position.y}%`,
              cursor: isHovering ? "zoom-out" : "zoom-in"
            }}
          />
        </div>
        <div className='w-[50%]'>
          <h1 className="text-3xl font-bold mb-4">{titleKey.toUpperCase()}</h1>
          <table className=" w-full border border-gray-200 text-sm md:text-base">
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold w-1/2 bg-gray-50">{t("material")}:</td>
                <td className="p-4">{t(details.material)}</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">{t("pillowcase")}:</td>
                <td className="p-4">{t(details.pillowcase)}</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">{t("sheet")}:</td>
                <td className="p-4">{t(details.sheet)}</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">{t("duvet")}:</td>
                <td className="p-4">{t(details.duvet)}</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold bg-gray-50">{t("size")}:</td>
                <td className="p-4">{t(details.size)}</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold bg-gray-50">{t("manufacturer")}:</td>
                <td className="p-4">{t(details.manufacturer)}</td>
              </tr>
            </tbody>
          </table>
          <p className='text-[red] my-4 text-[16px]'>{t("Category")} : {t(category)}</p>
        </div>
      </div>
      <div className='flex justify-between gap-[30px] my-20 pb-20'>
        <div className='w-1/2'>
          <h1 className='text-[30px] mb-[50px] mt-[30px] text-center font-bold tracking-[1.9px]'>{t("R-title-1")}</h1>
          <div>
            {reviewsData.map((review, index) => (
              <div key={index} 
              className='border border-[red] rounded-[5px] mb-[10px] p-[10px]'>
                <div className='flex justify-between items-center'>
                  <h4 className='text-black text-[16px] font-bold capitalize my-2'>{review.name}</h4>
                  <p> - {review.date}</p>
                </div>
                <p className='text-[#4e4b4b] text-[16px] font-medium my-2'> {t("Rating")}:  {review.rating}/5</p>
                <p className=' text-[12px] text-blue-500'>{review.message}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2'>
          <h1 className='text-[30px] mb-[50px] mt-[30px] text-center font-bold tracking-[1.9px]'>{t("R-title-2")}</h1>
          <form className='w-full' onSubmit={addReviews}>
            <label>
              <p className='text-[12px] text-[#3f3f3f] my-[10px]'>{t("y-r")}:</p>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <LiaStarSolid
                    key={star}
                    onClick={() => {
                      setRating(star);
                      setFormData((prevData) => ({
                        ...prevData,
                        rating: star,
                      }));
                    }}
                    className={`w-7 h-7 cursor-pointer transition-colors duration-200 ${star <= isRating ? "text-yellow-400" : "text-gray-300"
                      }`}
                  />
                ))}
              </div>
            </label>
            <label>
              <p className='text-[12px] text-[#3f3f3f] my-[10px]'>{t("Name")}*</p>
              <input
                autoCapitalize='off'
                required
                value={formData.name}
                onChange={formValue}
                autoComplete='off'
                name='name'
                className='text-[12px] w-full bg-[#e4e4e4] p-3 outline-none rounded-[25px] mb-5'
                type="text"
              />
            </label>
            <label>
              <p className='text-[12px] text-[#3f3f3f] my-[10px]'>{t("Email")}*</p>
              <input
                autoCapitalize='off'
                required
                value={formData.email}
                onChange={formValue}
                autoComplete='off'
                name='email'
                className='text-[12px] w-full bg-[#e4e4e4] p-3 outline-none rounded-[25px] mb-5'
                type="email"
              />
            </label>
            <label>
              <p className='text-[12px] text-[#3f3f3f] my-[10px]'>{t("Your-review")} *</p>
              <textarea
                autoCapitalize='off'
                required
                value={formData.message}
                onChange={formValue}
                autoComplete='off'
                name='message'
                className='text-[12px] resize-none outline-none w-full h-[100px] mb-[30px] bg-[#e4e4e4] p-3  rounded-[25px]'
              ></textarea>
            </label>
            <button className='hover:bg-red-900 w-full transition-all duration-300 py-[15px] cursor-pointer px-[60px] bg-[red] text-white rounded-[25px]' type='submit'>{t("s-r")}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
