import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-screen-xl mx-auto'>
            <h1 className='text-5xl text-center text-[#0b250d86] mt-6 font-semibold'>Module 42 Project Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;