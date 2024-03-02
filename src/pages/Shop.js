import React from 'react';
import './Shop.css';

const products = [
  { id: 1, image: 'https://www.pedigree.in/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf4446/files/2022-11/pedigree-landing-hero-dry-products.png' },
  { id: 2, image: 'https://images.jdmagicbox.com/rep/b2b/cattle-food/cattle-food-2.jpg' },
  { id: 3, image: 'https://supervet.in/wp-content/uploads/2021/04/Untitled-design-2.png' },
  { id: 4, image: 'https://m.media-amazon.com/images/I/71jClKsGLRL.jpg' },
  { id: 5, image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/XN/IZ/HA/19299971/veterinary-medicines.png' },
  { id: 6, image: 'https://s7d2.scene7.com/is/image/PetSmart/5316229'},
  { id: 7, image: 'https://media.tractorsupply.com/is/image/TractorSupplyCompany/2451312' },
  { id: 8, image: 'https://vetfor.com/wp-content/uploads/2022/11/Bovine-Viral-Diarrhea-Virus-BVDV-Rapid-Test-Kit.png' },
  { id: 9, image: 'https://5.imimg.com/data5/RN/EL/MY-71364865/bioline-cat-shampoo.jpg' },
  { id: 10, image: 'https://www.bigbasket.com/media/uploads/p/l/40235055_1-whiskas-wet-cat-food-kitten-2-12-months-tuna-in-jelly-for-balanced-nutrition-shiny-coat.jpg' },
];

const Shop = () => {
  return (
    <div className='amatic-sc-regular'>
      <div className="adopt-container">
        <h2 className="adopt-title">Choose me, and I'll be the paw-fect addition to your family..</h2>

        <div className="adopt-grid">
            {products.map(product => (
                <div key={product.id} className="adopt-card">

                  <img src={product.image} className="adopt-image" />

                  <div className="adopt-info">
                    
                    <div className="adopt-buttons">
                      <button className="adopt-button">Adopt Now</button>
                    </div>

                  </div>

                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
