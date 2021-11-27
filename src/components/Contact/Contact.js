import React from 'react';
import Footer from '../Footer/Footer';


const Contact = () => {
    return (
        <div className='container py-3'>
            
            <div className='card text-center border '>
                        <h1 className="text-center"><img
                            className='card-img-top p-5 w-50 ' 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_AuLAjyrDP1QBbPfFt6LZWcorC3-usxd1Q&usqp=CAU"
                        /></h1>
                        <div className='card-title'>
                            <h5 className='text-dark text-uppercase  '> Phone:14251212 <br />Email: jhfdsjh@jfh.com  </h5>
                            
                            
                            
                            
                        </div>
                    </div>
               <Footer></Footer>
        </div>
    );
};

export default Contact;