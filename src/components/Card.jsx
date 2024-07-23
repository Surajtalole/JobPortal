import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiMapPin, FiDollarSign } from "react-icons/fi";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img
          src={companyLogo}
          alt={`${companyName} logo`}
          className="w-16 h-16 object-cover rounded-full border-2 border-gray-200"
        />
        <div>
          <h4 className="text-blue-600 font-semibold mb-1">{companyName}</h4>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{jobTitle}</h3>
          <div className="text-gray-600 text-base flex flex-wrap gap-4 mb-3">
            <span className="flex items-center gap-2">
              <FiMapPin className="text-blue-600" />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="text-blue-600" />
              {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FiDollarSign className="text-blue-600" />
              ${minPrice} - ${maxPrice} {salaryType}
            </span>
            <span className="flex items-center gap-2">
              <FiCalendar className="text-blue-600" />
              {postingDate}
            </span>
          </div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
