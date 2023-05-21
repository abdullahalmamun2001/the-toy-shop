import banner from './../../assets/1.jpg'

const Banner = () => {
    return (
        <div
            className="my-container w-11/12 mx-auto my-10"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className='text-4xl text-fst-italic text-bg-cyan-200 w-9/12 mx-auto mt-32'>
                A toy marketplace is an online platform where individuals and businesses can buy and sell toys.It provides a convenient and accessible way for toy enthusiasts to explore a wide range of toys and find unique items.Toy marketplaces often categorize toys based on age groups, interests, brands.
                
            </div>
            <button className='ms-32 my-52 btn btn-secondary'>See more</button>

        </div>
        // <div className='my-10'>
        //     <img className='w-11/12 mx-auto img-fluid' src={banner} alt="" />
        // </div>
    );
};

export default Banner;