import React, { useState } from 'react';
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { FaSearch } from 'react-icons/fa';
import humidityImg from '../assets/humidity.png';
import windImg from '../assets/wind.png';
import cloudsImg from '../assets/clouds.png';
import clearImg from '../assets/clear.png';
import rainImg from '../assets/rain.png';
import drizzleImg from '../assets/drizzle.png';
import mistImg from '../assets/mist.png';

const FetchData = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('')
    const [data, setData] = useState({
        celcius: 10,
        name: 'london',
        humidity: 10,
        speed: 2,
        image: cloudsImg
    });

    const fetchData = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=0214499d857852a15f9f9a00c30914d7&units=metric`);

            const getData = await res.json();
            let currentImage = '';

            switch (getData.weather[0].main) {
                case 'Clouds':
                    currentImage = cloudsImg;
                    break;
                case 'Clear':
                    currentImage = clearImg;
                    break;
                case 'Rain':
                    currentImage = rainImg;
                    break;
                case 'Drizzle':
                    currentImage = drizzleImg;
                    break;
                case 'Mist':
                    currentImage = mistImg;
                    break;
                default:
                    currentImage = cloudsImg;
            }
            setData({ ...data, celcius: getData.main.temp, name: getData.name, humidity: getData.main.humidity, speed: getData.wind.speed, image: currentImage })
        } catch (err) {
            setError('Invalid City Name');
        }
    }

    const handelSubmit = () => {
        if (name) {
            fetchData();
            setName('');
            setError('');
        }
    }

    return (
        <div className='bg-div rounded-md p-5 w-[500px] max-w-[500px]'>
            <div className="flex items-center justify-between gap-5">
                <input className='p-2 rounded-lg outline-none w-full' type="text" placeholder='Enter City Name' onChange={(e) => setName(e.target.value)} />
                <div className="cursor-pointer text-zinc-400 bg-white p-2 rounded-full" onClick={handelSubmit}><FaSearch /></div>
            </div>
            {error && (
                <Alert color="failure" icon={HiInformationCircle} className='mt-3'>
                    <span className="font-medium">{error}</span>
                </Alert>
            )}
            <div className='flex flex-col justify-center items-center text-center  text-white'>
                <img className='w-[250px] max-w-full' src={data.image} alt="Status of weather" />
                <span className='text-white text-[25px]'>{Math.round(data.celcius)}°C</span>
                <h1 className='text-white capitalize font-bold text-[35px]'>{data.name}</h1>
            </div>
            <div className="flex justify-between items-center text-white">
                <div className='mt-8 flex items-center gap-3'>
                    <img className='w-[35px] h-[30px]' src={humidityImg} alt="" />
                    <div>
                        <h1 className='text-[20px]'>{Math.round(data.humidity)}%</h1>
                        <h1 className='text-[20px]'>Humidity</h1>
                    </div>
                </div>
                <div className='mt-8 flex items-center gap-3'>
                    <img className='w-[35px] h-[30px]' src={windImg} alt="" />
                    <h1 className='text-[20px]'>{data.speed} km/h</h1>
                </div>

            </div>
        </div>
    )
}

export default FetchData