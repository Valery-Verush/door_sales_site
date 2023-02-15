import React from 'react';

import { ReactComponent as DeliveryIcon } from './delivery-truck.svg';
import { ReactComponent as ClockIcon } from './24-hours.svg';

export function AboutPage() {
  return (
    <div>
      <div className='container bg-white shadow-sm p-3 '>
        <div className='   align-items-center mb-md-5'>
          <div className=' text-center fs-3'>
            <DeliveryIcon />
            <h5 className=' fs-1'>Оплата и доставка</h5>
            <ul className=''>
              <li className='mb-2 mt-2 fw-light'>Доставка по Гомельской области 50 копеек км.</li>
              <li className='mb-2 mt-2 fw-light'>Оплату можно производить наличным и безналичным расчётом.</li>
            </ul>
          </div>
        </div>
        <div className='  align-items-center m-md-2'>
          <div className=' text-center fs-3'>
            <ClockIcon />
            <h5 className=' fs-1'>Один день</h5>
            <ul className=''>
              <li className='mb-2 mt-2 fw-light'>Установка двери нашими специалистами</li>
            </ul>
          </div>
        </div>
        <div className='row justify-content-xl-between pt-5 pb-lg-5'>
          <div className='col-xl-4 fs-2 fw-bolder'>Наш адрес:</div>
          <div className='col-xl-5 fs-3 fw-lighter text-xl-end'>
            г. Гомель, Улица Каменщикова 3 (2-я галерея 53 место) Dvery@tut.by
          </div>
          <div className='row'>
            {/* <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.6298113845755!2d31.02011674980396!3d52.46777741437265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d46937760db291%3A0x1055e014ecc0b70!2z0J_RgNGD0LTQutC-0LLRgdC60LjQuSDRgNGL0L3QvtC6!5e0!3m2!1sru!2sby!4v1670536638322!5m2!1sru!2sby'
              width='1280'
              height='450'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}
