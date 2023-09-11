import PropTypes from 'prop-types'

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-100 p-5 rounded-xl mt-2'>
            <h3 className='text-2xl'>{title}</h3>
            
        </div>
    );
};

BookMark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default BookMark;