import React from 'react';
import { useDispatch } from 'react-redux';

const RatingFilter = ({ rating, filterByRating }) => {
    const dispatch = useDispatch();
    return (
        <span
            onClick={() => dispatch(filterByRating(rating))}
            style={{
                color: '#f0c040',
                fontSize: '1.1rem',
                cursor: 'pointer',
                marginBottom: '5px',
            }}>
            <span>
                <i
                    className={
                        rating >= 1
                            ? 'fa fa-star'
                            : rating >= 0.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-star-o'
                    }></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 2
                            ? 'fa fa-star'
                            : rating >= 1.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-star-o'
                    }></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 3
                            ? 'fa fa-star'
                            : rating >= 2.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-star-o'
                    }></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 4
                            ? 'fa fa-star'
                            : rating >= 3.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-star-o'
                    }></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 5
                            ? 'fa fa-star'
                            : rating >= 4.5
                            ? 'fa fa-star-half-o'
                            : 'fa fa-star-o'
                    }></i>
            </span>
            <span style={{ color: '#404040', fontSize: '1.1rem' }}> & up</span>
        </span>
    );
};

export default RatingFilter;
