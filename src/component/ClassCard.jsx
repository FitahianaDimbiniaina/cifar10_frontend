import './ClassCard.css';

const classData = [
  {
    name: 'Airplane',
    image: 'https://images.unsplash.com/photo-1663206748336-78889fd0b226?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    name: 'Automobile',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=731',
  },
  {
    name: 'Bird',
    image: 'https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
  },
  {
    name: 'Cat',
    image: 'https://images.unsplash.com/photo-1615807713086-bfc4975801d0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
  },
  {
    name: 'Deer',
    image: 'https://plus.unsplash.com/premium_photo-1661819541230-034d07819c9b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2072',
  },
  {
    name: 'Dog',
    image: 'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=714',
  },
  {
    name: 'Frog',
    image: 'https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=665',
  },
  {
    name: 'Horse',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
  },
  {
    name: 'Ship',
    image: 'https://images.unsplash.com/photo-1575528941322-c74397246f19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
  },
  {
    name: 'Truck',
    image: 'https://media.istockphoto.com/id/1330773538/photo/white-semi-truck-with-trailer-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dh9vyTSLXTn9Ke2nygUclnfXcYaNpkTVYpVehoZVdx0=',
  },
];

const ClassCards = () => (
  <div className="class-cards-container">
    <p className="class-cards-title">
      This model can predict images from the following classes:
    </p>
    <div className="class-cards-grid">
      {classData.map(({ name, image }) => (
        <div key={name} className="class-card">
          <div className="class-image-container">
            <img src={image} alt={name} className="class-image" />
          </div>
          <p className="class-name">{name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ClassCards;
