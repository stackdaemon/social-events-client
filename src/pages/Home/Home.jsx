import React, { use } from 'react';
import Gallery from './Gallery';
import Features from './Features';
import Newsletter from './Newsletter';
import Banner from './Banner';
import { AuthContext } from '../Auth/AuthContext';
import Loading from '../Private/Loading';



const Home = () => {
     const {loading}=use(AuthContext)
     if(loading){
          return <Loading></Loading>
     }
     return (
          <div>
            {/* <SwiperSlider></SwiperSlider>  */}
            <section>
               <Banner></Banner>
            </section>
            <section>
               <Features></Features>
               </section>  
               <section>
                    <Gallery></Gallery>
               </section>
                  <section>
                    <Newsletter></Newsletter>
               </section>
              
          </div>
     );
};

export default Home;