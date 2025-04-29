'use client'; // Required for using useEffect and useState in Next.js 13+

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './BrandsSlider.module.css'; // Create this CSS module

interface Brand {
    id: number;
    name: string;
    image: string;
    width?: number; // Optional width for the logo
    height?: number; // Optional height for the logo
}
const BrandsSlider = ({ brands }: { brands: Brand[] }) => {
    // Duplicate the brands array to create seamless looping
    const duplicatedBrands = [...brands, ...brands];

    // Animation control state
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div
            className={styles.sliderContainer}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className={`${styles.sliderTrack} ${isPaused ? styles.paused : ''}`}>
                {duplicatedBrands.map((brand, index) => (
                    <div key={`${brand.id}-${index}`} className={styles.slide}>
                        <Image
                            src={brand.image}
                            alt={brand.name}
                            width={brand.width || 120} // Default width or custom
                            height={brand.height || 60} // Default height or custom
                            className={styles.brandLogo}
                            priority={index < 10} // Only prioritize first few images
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandsSlider;