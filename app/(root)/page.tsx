import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotlaBalanceBoxProps from '@/components/ui/TotlaBalanceBoxProps';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Sidebar = () => {
  return (
    <div className="sidebar2">
      {/* Add sidebar content here */}
      <p className='him' ></p>
    </div>
  );
};

const Home = () => {
  const loggedIn = { firstName: 'Abisentry!', lastName: 'ke' };

  return (
    <>
      <Sidebar />
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Have a look at the Quick Progress Bar.'
          />

          <TotlaBalanceBoxProps
            type="greeting"
            title="Hello"
            user={loggedIn?.firstName || 'Guest'}
            subtext={`We are delighted to have you on board with us, where security meets simplicity.
              Your digital world is constantly evolving, and safeguarding it is our top priority.`}
          />
        </header>

        <div className="current-projects mt-6">
          Current Projects
          <p>
          Projects that are currently in progress
          </p>
        </div>

        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}/>
      </div>
    </>
  );
};

export default Home;
