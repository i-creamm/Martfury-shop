import { useEffect, useState } from 'react'
import {getProductLatest} from '../../Services/productService'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import "swiper/css/navigation";
import { Navigation, Autoplay, EffectCoverflow  } from "swiper/modules";


function FeatureProduct () {
    
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchAPI = async () => {
            const result = await getProductLatest();
            setData(result)
        }
        fetchAPI();
    },[])

    return (
        <>

            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                navigation={true}
                grabCursor={true}
                centeredSlides={true}
                modules={[Navigation, Autoplay, EffectCoverflow]}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="mySwiper"
            >
                {data && data.map((item, index) => (
                    <SwiperSlide>
                        <div key={index} className='h-full bg-white'>
                            <img className='w-full h-6/12 aspect-square object-cover' src={item.image} alt='product1' />
                            <div className='item-content items-center p-4 border-solid border-[#efefef]'>
                                <div className='text-2xl font-normal mb-2 text-[var(--color-primary)]'>{item.name}</div>
                                <div className='text-2xl font-bold text-[var(--color-primary)]'>{item.price}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
                
            
        </>
    )
}

export default FeatureProduct