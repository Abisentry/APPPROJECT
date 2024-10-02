import React from 'react';

// Define the props interface
interface TotalBalanceBoxProps {
  type?: string;  // Optional, defaults to "title"
  title: string;  // Required
  subtext: string;  // Required
  user: string;  // Required
}

// Use the props in the component with destructuring
const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({
  type = "title",
  title,
  subtext,
  user
}) => {
  return (
    <div className='total-balance '>
      <h1 className="Total-box-title ">
        {title}
        {type === 'greeting' && (
          <span className="text-black">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default TotalBalanceBox;
