import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.navigation}>
        <li className={s.navigation__item}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={s.navigation__item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li className={s.navigation__item}>
          <a href="#">News</a>
        </li>
        <li className={s.navigation__item}>
          <a href="#">Music</a>
        </li>
        <li className={s.navigation__item}>
          <a href="#">Settings</a>
        </li>
      </ul>
      <ul className={s.friends}>
        <li className={s.friend}>
          {' '}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSxtUgta4KIoYTr_jOMoKxvxRkwiOuePGRQ&usqp=CAU"
            alt=""
          />{' '}
          <span>Alex</span>
        </li>
        <li className={s.friend}>
          {' '}
          <img
            src="https://image.shutterstock.com/image-photo/beautiful-afro-man-front-brown-260nw-620050778.jpg"
            alt=""
          />{' '}
          <span>Roma</span>
        </li>
        <li className={s.friend}>
          {' '}
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAPDxAPEBAQDw8PDw8NDRAPFRIWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGC0dHR0tLSsrKy0tLS0tLS0tLS0tLS0tLS0tLS0rLSstKy0tLS0tKystLSstLS0tLS03Ky0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADUQAAIBAwMCBAQEBQUBAAAAAAABAgMEEQUSITFBBhNRYSIycYFSkaHBByNCYrEUFWPR8DP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAhEQEBAQEAAgICAwEAAAAAAAAAAQIRAyESMQRBEyJRMv/aAAwDAQACEQMRAD8AehA0aUQehTDqcTyY9LdWRRJRJxiSUQoVVgfBZtFtMBkiyMRRRajMhJHI+N/ETtqe2k15lRtZ/Cu7OpuKyXDaR5Z/EnCqQSecrp6FPHO6kG+p1zVvvrVMybk5PLb5bPQNA0hQSyuXyc54K0xzn5kvlXT3Z6bZW6R12/qFzPXT2tml/wC5ZoUqHsTo0wylTDweh40PUtVIKUB1AMhehHAbAY6ZF0g8Bk3tlGazjnj9Dmtc0ffBrGcNs7iVIEuKCYOGleN32mOnN+i59se5najbbWpLg9O8QaYmtyWeGn9zz/VKTiu7S4fsboXLsfAVdSiucPHy+rzyzuIxPJvB9Sca0FB5Tf29T1yjyjj8k5o3fRKJJRLEh1EXgdQUR3Es2jtG4HVG0ZxL9o20HBUbRtpe4kXEzBpxBqiDZoGqonuK4Z1ZAVQProBmjnrt8YeRXgumitgWatKmEwgRpIJhE6o8vVRiiSiTUSWAkVYFgs2jbQsiNOfD9fQm4FVeGcdvczA7mhFpuXxeq7nkPiSbndTi25KEtsc9o9T167X1+qPIK0G7yov+WWe/RlvB90dfUdv4ct1CMEl2R19rE5vS1j7HUWseEVn2ezkG0YhcUD0kFwRWIpxRJRQoofAxUcD4HwPgJVUkD1IhckDyQDxmXtDKafc8+8U6bs3SXytPKPSq6Oc8VW38pyx06/RiUzzjw5cKjVptptOaxj1PaLWopJNdGeNaNbKVV+kXlLnrk9b0zhJeqX0yc3l+2n00icSKJREBIQ6EYDDMlgbBmRGZLAzAZTUBKoXUBapPamAFcCmG1wKojmru8YaqylsnWKgRZ0VFBUYldGITGJ1ZeZtHA+C3YJwG4kpFgscBnEzKpMqz35L6seGQcMR+wRAX9dQjKTxhRbeemDyDSWqlzKS4UqkpJe2Wz0b+IFWVK0lhZc2ot+zPNPC0v50S/inq1r9x6JYvH6GpLxHQotQe6cu6is4MRUZzxCD25xmS649jVtdHtor4o7pd2x88impa0rfxRbvq5RfvFmxZalSqfJOMvo+Tmp6FQl8uY/fKAVoNWi91Oba6+5XsT+L0ONQkpnPaReS27Z9UbNOWTTRbngjeRncxXVpfV4Bqs8HLata1a03ieI5XHsH5BM9dLW1ahF4dSP55KVq1BvCqR/wjm7fw961JfbqGS8PU2vmkN6o842qkk+U8r2M7Wqe6jNPph5BLa3r20ktyqUZPDWPih7mpqGPKm/7WJqM8u0Gni6ay8PKXuek6fScZPl44STPJ7y6dOrGUHiUZ7so9X0S686EJ92k2cvkn1Ra8SxIUYklETgEkPgdIfAQRFglgWDMg0RaLcDOItENUQHVDqiBKsSe1cM+uBtB9WJR5ZzX7dmL6ZtaBRsNOpTKfKNFPm3aMAqEB6VMIjE685ebrSraM4l7gQcR+J9VbSLiX4I7Qcbqmcclc1wEOJCt04DwXnP8AEar5nmUm2tsYygs8NrqcR4Upvzo+3/R3fjCh/N3cvK69mc5oFuo1uFjDZfF/rxbWJ/Wx2NrHDz6LquTI1vW528lCMJ1JyWeFJR693jg6jRjXrWKms7VLjpxyNhtWvNZa7fUpwjUja0ozx8dbe6cU02t0+3Q39N16o9++ntUJ7POg5VLOpzw8vmCfZ9DWr6JQk/jo1Pptc48fnwGWWjU1nEJqLeXFvZB/VLqdEubOIWal70IquXGpHpLKkk8pNHSWMvhRkXltCmlCnGMF12xWI+5q6e8xT9icns2r2IX6byl1wczqmp+TLyYJ1KreNsMObb6eyXuzqv6v0BNS01T52Rn+kvsxuBL+nmlTxBdqdVNWtOVNSkqdac5VKjTa20/xPj27BNr4ynT8t3FJ0vMTcZRblTlh45T5idTLRKGW5UJ5eedm5rPXAbQ0ejhLyuI9PMgN8s8CTUv2jYajCqk0+JLKyW6xPFCo/wC0K/0kI/LFL6cAmtRzRmvYlqmeJ6julUx05x+p6r4OnLyoZeVjb78HF09KU6m7rhnfeH7fy6cOMexHyX1D/DmbXTwLEV0139i0RIhEkIDGQ+BEjcZHAmhx2gMHqIDqoPmgSqiW1cAKkSloKqIoObTpzfQecSGxBE0VYFHroqcS6MCumExO+OCq3Eg0ENFTQwKsDNFjRFo3BVtFFyuAloouFx+Rmc54osVKnB46PDOOsbTbPf8Aiclj6HpGrW7nSkl1XK+xyFWlGK4XfP0fcaX06fHe5HafUw0vuzqbR5SOS0/l5+nJ1NrPgt428k9NGNMjV4ISulFGXeX/AMSg3jPP2KXUiEzabUGm+uWH2EMQ+xnOcXKPKZt0tu3r2Bn7bXqBodQtIDljPUqlWkn8Ly0sr0fsw9DnWjsyRqRwV2t8prPR913TJVqgezjfG9B1ZAd88xa9QirLkp25fsSqlnHLWli4zksZ9Dp7a3nGKW3CS6KSY1Cye/L6yb4XZdjaUCe23r6U2sspcvjs1gJiyqEeS5CJHELA5gIQhZAJxYGTHyBlc0DVQmYNVJ7UwEqgrCazBJM5tOnP0dlLZOTKWKPHS02FQYDQYbTO7NceomyLRZgi0ORVJEGi5xISiZlTKqqyi9orkjCqRgato7+OcGlFKUnF9VhZ4OhaK60N0ZR/EmvzWDGzqyuOsOGb1KthGPZw5Sfrh+z9DYt7ZyKZrp1Zw1Otl5f29gS/07zX1aa6NcMzNV12Ftnfuz6JNlFt4oqTw4UJtN4Twnz+Y3qz2Exr7yepoFSnJzpzmpdeZNpv3RoW+oXKW3Y89M9iMNbqr5qUo/WEsfmaNvrCaT2LP2DnH+U9zvnudU/7JcVfiqVpx74i9qX2X7mpZWXlL5nN95S6sz6niF5wqcpfSMge68V06f8A9YVaeOrcJY/wP8ZE9Y8nPoddz8qamukuJrtn1C43CayZ9jqVG8g/LkpJrphp89OHyW21vKKw/wCmWPqs8MnfV9BPr39rm8sfbLrFZw+cdcD7MF9rL9QW8hNVdaU3jLWG+3dBDkSQsE7epWowjgngWB0BjoQwmECERFkWikLI2RCsjIErMKmwOuxNKYB1mCuRbXkBOZzV14i9sgMmOLwa6G2iH0kUUIBkIndiOHdJojgucSDRXiatog0WtEGgMpkitl0kVtAFWyuaLsFc0YXP3dHZVfZVPji/Sfdfv9zTsmt3HSa3L2f9S/P/ACV6nbeZBpcSj8UH/cjMsr54T7xeWvSXR/mv1wNirfcN4nsVLnCeVw8J/Vf+9DD0m7oW+PNUk/NXMYSnFLDy5JZwv3wdfqeJ01NcxfX2ycreWDb3w6rl+5VTxWWfG3jp9N1ewqbVCtDc5ycYzeybSb6p9uDZpztYzlLfSzsz88Ek3nn26HA2tKnJrfCm5+k4KSZrx06msONtZqTXzeVDr6l8y0PL+Py/daVxrNlDa93mfzXGbjGU0nh8vC5intXHqjCvb2F2pJUJw3Sxmqo7pYl1ik38LwnzgsuqST2xe+T/AApKMf2D9LsNvMlmT/Q1a+PGJ8rb0VplkoR6Lc+rxyE1YdPRcv8AYIhwsgtep/2/2RHX2j8u3oa4qpF9ounoZVeqpT2evIZp9RxeGR1fbVtxHK6c8lgCE2NkcYDFkTYwjMQhmMhWSEIdAZVMErh0kB10JtTDLuAFmjXQBI5q7MfRQLRoIvVMzarqrdBkECWwdA9DLztGaISRayDKWEVNFckXSRCQtGKJIpki+ZTMU0VsraLGQbMKuaOLua2ytUXZyefudnURx2tUM1p49v8ABP8Aa/jaWkXvDpS5XWOfQvnZtPjldjm6NVxa7NdPodXpd4ppZL4svqtuWe4Flpql1j9+jEtM7Pdg3YwXYsUF6F5kv8up+2Xb2aj0QfSpYCFFFdxUUU2FO20PdVeyM6vVz8K+41av6dX+hZb0O7J29NPTAlWSuGm8YSSNyOeqOenbeZVm84e54+xo6dcThJ05/ZnNb7Gxu2lTP1QdGRm0Xh8GhT5QxKtyMIQAIQhmBjMYdkWwVk8i3FLmVyrC0YvnMDryFOsDVKpHel8ZU15GbOXIXXqGZVnyc9rt8ePTQtmGpoybesGqsGUu8OqtqgfTkYllV6GrSqHo4rzNwVkiyKkM5FepmkyuTFKRCUhRRmymTJSkQYDRBkWSZFgNFczl75bq1R+6X6HSXFVRTyc5Re6U5fiba+guZ2qd4CubXJRbXUqUuuP8M3HRyjPurRegbPj9Hzrrb0/VoySy8M0lexff9TiVp7zmLa+jL6VpU/HL8ymfNf8AAuI62rqEIrLZk172VR8dO3oUW+nN/M2/qzToWqQ/y1pO8yqs7Xu+odUjhF1OGERrLgeZ5E7rtcvStnubXXc2X1YtyWV09A6hSxKWSap/F9TksU6qtZYZqUJlCtkWwpYDJwKKyOVwZYYpDMTZFsDGbKakyU2C15i0YhVr4Aqt4l3KL2tg5zUNQx3EvVMR0E9QXqVu8z3OMjqTcjYt6rZHWa9Dx+OcbE6wJUZBSIVZk/it6iuVztZcr73MDULtJ9QP/cfcaeO1tWPVtPr9DboVDlNHnlI6O3OvLxtNFTE5FSYzkU6nxKUityGbItm6PCbGQ4zZmMymrNR6vCB7vUYxzjnBiavcTml1Tl2XZF8+DVnb6if8s78Z7patqaqfy6fOXhy7E7ejhJewPp9lg1VTwLnxrW/pGNMarb5RfFBChlDfAJplUqIbSoE1QwwmETTDXSMaWCyESWCUEUkLafsVSRZIjgJANaOORreulLEur6MKq0wGtDH2E/jlvs3yvPTSyiKBN749yyhcLOGDyfj6z7ntPH5GdX431RSZLJHKFk5audsjKQzZCUheijUkA3Ey+rMBuZCWmkY+pVOpx+rVep1Oovqcjqy6j4P9M2hXxI6eyuU0jiJzwzVsL7BTfjW8Xl/Tr/OQPdXOEZkb33BLy86kvgvdgdXuMsyHXl6l15VywNs6M5kjm3q2vb9FbwjpreQ4iGUN/YlMfIwhyFkprXEY8toQhsztaM2trS5UItv36AcbmpUbcnhLshCOvw+PPzR/I1c4vCcM493klWo5kvZYEI6fL/y4/wAX/romjSCYwEI547qjOGC2mxCAyZNMYRqPEsj5EIzVBsnFCEEhVIgtWAhBBTFfD9Cj+py7JYEIvu/1Q/HzL5/aj/VuKc92Ir17kbbxHTbxP4ffsIRx+TEr2Z481oUr+nP5Zp/cnKQhHFucqOsyUPUYDcsQiVaMO+fU5TVV1EIr4xrmrnqV0qjQhHUTN9jqdd4GqVMiETrqz7CVY5B2hCDkuo//2Q=="
            alt=""
          />{' '}
          <span>John</span>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
