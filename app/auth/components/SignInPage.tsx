'use client';

import SignUp from './Cards/SignUp';
import LogIn from './Cards/LogIn';

import React, { useState } from 'react';

export default function SignInPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
        <div role="tablist" className="tabs tabs-boxed">
            <button
                role="tab"
                className={`tab ${activeTab === 1 ? 'tab-active' : ''}`}
                onClick={() => handleClick(1)}
            >
                Create Account
            </button>
            <button
                role="tab"
                className={`tab ${activeTab === 2 ? 'tab-active' : ''}`}
                onClick={() => handleClick(2)}
            >
                Sign In
            </button>
        </div>

        <div>
            {activeTab === 1 && <SignUp/>}
            {activeTab === 2 && <LogIn/>}
        </div>
    </div>
  );
}
