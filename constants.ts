
import { Car } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    make: 'Porsche',
    model: '911 GT3',
    year: 2023,
    miles: '1,200 Miles',
    transmission: 'PDK',
    price: 245000,
    status: 'JUST ARRIVED',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCITwNib-XhE7XdwKqN4658ixLM7ND3QuOCMk22yb7dnrCPqkgtA1OW1BoRZLSzwEtKdT2kK-3fe0bAW3GLhO38nWjMxFN9scvEONbFNUdArVo-eBi7Wkl2tlJNtcV1t1SQUHA3dstS2v7uFLNMb3tcbABxvXFxFWHbhS_n7OJ2OoxsAey_MhEQqjuYpzPgyAzXhwj3t-OVleG37_3YiQX-y4tQl_d5EKg_wm2CbDm9TIiLJBVv-TwSm0WNhUwDQpbOK6iZVILOioCY',
  },
  {
    id: '2',
    make: 'Chevrolet',
    model: 'Corvette Z06',
    year: 2024,
    miles: '50 Miles',
    transmission: 'Automatic',
    price: 168900,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1ziF_rjw-Pw_iYhYGc3CLY_rLS63KJ5iM91MarEZkybLH7TY4xDgpHqczFGwXon8lHYPFvZKjylzfrF8A4LbXqlr2a6VFrxQ_yMcsesSPVPPEwrJ_RRq-D2cOJ_i2CLhCKaJjTCP13fbonfyPlr7Pmd5eG2nvmb1-tpxLOFOjOJezhY5iwo56cURZ5XpVpIVWO5AcyIN6vV8sKiDlNYYrubJQ9cQ8g8CKVnAKw_VhhS-E5OgYpdcVkFB8IJp-I-qmMOBIlsVH0rtP',
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'G 63 AMG',
    year: 2022,
    miles: '12,500 Miles',
    transmission: 'Automatic',
    price: 195000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq9M6rodp422unTXKea7JQffI9c0HiunZAenTNNn6cyYuDVgE3_1RvL2We11eOk2suBB0rgBroZeQX30Y9wuDPhWXw_bcpNO16DlOFX6EIcN89xdnOX5_dvulRPFRyOK6SSLSYWytB8CM7VR6EE98mFX-aNuEp5hazbdvQAe8h1hRdKw70lvCmlHSxLdosQ1fgjUR68RcIUHfPjb8aymCQcSeVkNJ5HPLHK2L2VxTOrZg7-Pbukou_OmQkiuusu3e56Djz4bo4HmhY',
  },
  {
    id: '4',
    make: 'Ferrari',
    model: 'F8 Tributo',
    year: 2021,
    miles: '3,400 Miles',
    transmission: 'Dual Clutch',
    price: 315000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAna82oCn7yXGEy4xZPan3IYbHVlKsQ_Vcd5GpShk2Ytk5AuRLIXdfPcW1BIUKoAfyDb-VjF9o8osbhl8iMmmMEyFmxJx-QqGBFCNHPYxx7I0eRojcXEjQ1N21-ZXuOBkDvCrYrUSmkPBGG51h0iLPMT6qBwCn60PHPobM3z4H7ExkLV2cNsnOpiWE_igLe90XEcgCIiQnmsrhpMqKtEiCsDxtKZQAkUjw3ISXVpa3zYaQ8mvYu7zjNtrjnHYqkB9CMVcGr84hiebmU',
  },
  {
    id: '5',
    make: 'Lamborghini',
    model: 'Huracán EVO',
    year: 2023,
    miles: '800 Miles',
    transmission: 'AWD',
    price: 298500,
    status: 'RESERVED',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwRRJvCvYUt3XsU7DSwRiIXW-2TUyiMUFfbK09t4hPNhGuSm-4LsTtKBB9acM95CWnetxe3lM2tuD2fh4iYKJYZ3OZ3DRakL_Q_t8kvc-KHtZG0CBbx353-7_kH_TgsyFNQTNXJiENLxXaXEcd0spIp_gkF_4IfiGO5X8kYqsgJTmJdEU1sVCd8Aa44RoaHfxflIJofyZK0G_IpaGdKGHPTRreNjd4kqh_KCwQYoSFwo8YGnVlzDU7ox5UcaK5g3wA-oSntv7mbP58',
  },
  {
    id: '6',
    make: 'Audi',
    model: 'R8 V10 Performance',
    year: 2022,
    miles: '8,900 Miles',
    transmission: 'Quattro',
    price: 182000,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbFXQZdYC9g3yHjM75qVLJqRjAi3JjLuPtZ4mTchlH3uzRyJoe-YdoErxteiykQaf7BS_0CXq1WTo08PhcbMMjH4xMpeKC9KUthQDXiWnzbJCJBKuivPQbrVApSoiuJ_mNb9F5z2GfclUu9ABIpMqWJhfDOVDmeNZF9N28amKRos5r-pvcSubngNlgfaZlj1YN6HsTzlIeBfW2BsJeKtULcf0SkX3lTE15IqJVGhQ_1YBZEDXz_n72oaSdE8xtZwgMdmdcKKQ3iISp',
  },
];

export const MAKES = ['All Makes', 'Porsche', 'Chevrolet', 'Mercedes-Benz', 'Ferrari', 'Lamborghini', 'Audi'];
export const MODELS = ['All Models', '911 GT3', 'Corvette Z06', 'G 63 AMG', 'F8 Tributo', 'Huracán EVO', 'R8 V10 Performance'];
