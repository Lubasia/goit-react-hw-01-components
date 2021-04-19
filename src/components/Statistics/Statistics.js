import React from 'react';
import PropTypes from 'prop-types';
import style from '../Statistics/Statistics.module.css'

const Statistics = ({ title, stats }) => (
    <section className={style.statistics}>
  <h2 className={style.title}>{title}</h2>

        <ul className={style.stat__list}>
            {stats.map(stat => (
                <li className={style.item} key={stat.id}>
      <span className={style.label}>{stat.label}</span>
      <span className={style.percentage}>{stat.percentage}%</span>
    </li>
            ))}
    
  </ul>
</section>
)

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}

export default Statistics;