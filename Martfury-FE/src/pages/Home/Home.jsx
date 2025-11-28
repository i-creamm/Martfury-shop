import hero from '../../Components/assets/pngtree-open-book-logo-png-image_12467719.png'
import box1 from '../../Components/assets/mbr.jpeg'
import box2 from '../../Components/assets/card1.jpg'
import box3 from '../../Components/assets/mbr-3.jpg'
import { NavLink } from 'react-router-dom'
import FeatureProduct from '../../Components/feature-product/FeatureProduct'

function Home() {
    return (
        <>
            <section className='bg-[#f0f2f5] py-20'>
                <div className='container'>
                    <div className='inner-warp flex items-center'>
                        <div className='inner-content w-6/12'>
                            <div className='inner-title text-[60px] font-black text-[var(--color-primary)] mb-8'>
                                Find Your
                                <br />
                                Next Book
                            </div>
                            <div className='inner-desc text-md text-[var(--color-primary)] mb-8'>Discover a world where every page brings a new adventure. <br /> At Paper Haven, we curate a diverse collection of books.</div>
                            {/* <div className='inner-wrapper flex items-center space-x-10 w-6/12 text-[20px] text-[var(--color-third)] mb-8'>
                                <div>
                                    Anti-Bacterial
                                </div>
                                <div>
                                    Anti-Virus
                                </div>
                            </div> */}
                            <a className='text-lg text-white inline-flex bg-[var(--color-second)] border-[var(--color-second)] py-3 px-8 items-center rounded-[45px] hover:bg-white hover:text-[var(--color-second)]' href='/'>Explore Now</a>
                        </div>
                        <div className='inner-image w-6/12'>
                            <img className='w-full' src={hero} alt='hero-image' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-white py-20 px-0'>
                <div className='container'>
                    <div className='flex justify-between gap-5'>
                        <div className='relative h-full basis-[calc(100%/3)]'>
                            <img className='h-full w-full aspect-[4/3] object-cover' src={box1} alt='' />
                            <div className='absolute top-8 left-8 flex-col justify-between h-full'>
                                <div className='h-3/5'>
                                    <div className='inline-block text-white text-lg bg-[#13A05D] py-1 px-5 rounded-3xl border-solid border-black '>NEW</div>
                                    <div className='title text-[34px] text-white font-bold pt-0'>Antivirus <br /> Mask</div>
                                </div>
                                <div className='h-2/5'>
                                    <NavLink className=' inline-block text-lg text-white bg-[var(--color-primary)] rounded-[30px] py-2 px-8 items-center mt-5 hover:bg-white hover:text-[var(--color-primary)]' to='/'>More</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className='relative h-full basis-[calc(100%/3)]'>
                            <img className='h-full w-full aspect-[4/3] object-cover' src={box2} alt='' />
                            <div className='absolute top-8 left-8 flex-col justify-between h-full'>
                                <div className='h-3/5'>
                                    <div className='text-[34px] text-[var(--color-primary)] font-bold'>Basic <br /> Mark</div>
                                    <div className='text-[51px] text-[var(--color-second)] font-bold'>-30%</div>
                                </div>
                                <div className='h-2/5'>
                                    <NavLink className=' inline-block text-lg text-white bg-[var(--color-primary)] rounded-[30px] py-2 px-8 items-center mt-5 hover:bg-white hover:text-[var(--color-primary)]' to='/'>Shop Now</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className='relative h-full basis-[calc(100%/3)]'>

                            <img className='h-full w-full aspect-[4/3] object-cover' src={box3} alt='' />
                            <div className='absolute top-8 left-8 flex-col justify-between h-full'>
                                <div className='h-3/5'>
                                    <div className='text-[34px] text-[var(--color-primary)] font-bold'>Medical <br /> Mask</div>
                                    <div className='text-5xl text-[var(--color-second)] font-bold'>$15.99</div>
                                    <div className='text-2xl text-[#bbbbbb] font-bold line-through'>$29.99</div>
                                </div>

                                <div className='h-2/5'>
                                    <NavLink className=' inline-block text-lg text-white bg-[var(--color-primary)] rounded-[30px] py-2 px-8 items-center mt-5 hover:bg-white hover:text-[var(--color-primary)]' to='/'>More</NavLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className='py-20 px-0 bg-[#F0F2F5]'>
                <div className='container'>
                    <div className='flex-col items-center justify-between'>
                        <div className='text-[34px] text-center font-bold text-[var(--color-primary)]'>Featured products</div>
                        
                        <div className='flex justify-between mt-8 gap-2'>

                            <FeatureProduct />

                            {/* <div className='h-full bg-white basis-[calc(100%/5)]'>
                                <img className='w-full h-full aspect-square object-cover' src={hero} alt='product1' />
                                <div className='item-content p-4 border-solid border-[#efefef]'>
                                    <div className='text-2xl font-normal mb-2 text-[var(--color-primary)]'>Basic Mark</div>
                                    <div className='text-2xl font-bold text-[var(--color-primary)]'>$1.99</div>
                                </div>
                            </div> */}

                            {/* <div className='h-full bg-white basis-[calc(100%/5)]'>
                                <img className='w-full h-full aspect-square object-cover' src={hero} alt='product1' />
                                <div className='item-content p-4 border-solid border-[#efefef]'>
                                    <div className='text-2xl font-normal mb-2 text-[var(--color-primary)]'>Basic Mark</div>
                                    <div className='text-2xl font-bold text-[var(--color-primary)]'>$1.99</div>
                                </div>
                            </div>

                            <div className='h-full bg-white basis-[calc(100%/5)]'>
                                <img className='w-full h-full aspect-square object-cover' src={hero} alt='product1' />
                                <div className='item-content p-4 border-solid border-[#efefef]'>
                                    <div className='text-2xl font-normal mb-2 text-[var(--color-primary)]'>Basic Mark</div>
                                    <div className='text-2xl font-bold text-[var(--color-primary)]'>$1.99</div>
                                </div>
                            </div>

                            <div className='h-full bg-white basis-[calc(100%/5)]'>
                                <img className='w-full h-full aspect-square object-cover' src={hero} alt='product1' />
                                <div className='item-content p-4 border-solid border-[#efefef]'>
                                    <div className='text-2xl font-normal mb-2 text-[var(--color-primary)]'>Basic Mark</div>
                                    <div className='text-2xl font-bold text-[var(--color-primary)]'>$1.99</div>
                                </div>
                            </div>

                            <div className='h-full bg-white basis-[calc(100%/5)]'>
                                <img className='w-full h-full aspect-square object-cover' src={hero} alt='product1' />
                                <div className='item-content p-4 border-solid border-[#efefef]'>
                                    <div className='text-2xl font-normal mb-2 text-[var(--color-primary)]'>Basic Mark</div>
                                    <div className='text-2xl font-bold text-[var(--color-primary)]'>$1.99</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home