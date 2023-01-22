import React from 'react';
import PropTypes from 'prop-types';
import { GiHamburgerMenu, FaDollarSign, FaUserCheck, IoShieldCheckmarkOutline, FiCheck, FaExclamation } from 'react-icons/all';

export default function Wizard({ wizard, step }) {
  return (
    <section className="wizard">
      <h2>{wizard === 'stake' ? 'Stake' : wizard === 'unstake' ? 'Unstake' : 'Withdraw'} your SERA</h2>
      {wizard === 'stake' && <div>
        <div className={step >= 0 && "active"}>
          <GiHamburgerMenu className="social-link" />
          <span>Checkpoints</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 1 && "active"}`}/>
        <div className={step >= 1 && "active"}>
          <FaDollarSign className="social-link" />
          <span>Amount to Stake</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 2 && "active"}`}/>
        <div className={step >= 2 && "active"}>
          <FaUserCheck className="social-link" />
          <span>Pre-authorization</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 3 && "active"}`}/>
        <div className={step >= 3 && "active"}>
          <IoShieldCheckmarkOutline className="social-link" />
          <span>Confirm</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 4 && "active"}`}/>
        <div className={step >= 4 && "active"}>
          <FiCheck className="social-link" />
          <span>Confirmation</span>
        </div>
      </div>}
      {wizard === 'unstake' && <div>
        <div className={step >= 0 && "active"}>
          <FaExclamation className="social-link" />
          <span>Warning</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 1 && "active"}`}/>
        <div className={step >= 1 && "active"}>
          <GiHamburgerMenu className="social-link" />
          <span>Checkpoints</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 2 && "active"}`}/>
        <div className={step >= 2 && "active"}>
          <FaDollarSign className="social-link" />
          <span>Amount to Unstake</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 3 && "active"}`}/>
        <div className={step >= 3 && "active"}>
          <FaDollarSign className="social-link" />
          <span>Initialize Unstake</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 4 && "active"}`}/>
        <div className={step >= 4 && "active"}>
          <FiCheck className="social-link" />
          <span>Confirmation</span>
        </div>
      </div>}
      {wizard === 'withdraw' && <div>
        <div className={step >= 0 && "active"}>
          <GiHamburgerMenu className="social-link" />
          <span>Checkpoints</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 1 && "active"}`}/>
        <div className={step >= 1 && "active"}>
          <FaDollarSign className="social-link" />
          <span>Initialize Withdraw</span>
        </div>
        <hr className={`d-none d-lg-block ${step >= 2 && "active"}`}/>
        <div className={step >= 2 && "active"}>
          <FiCheck className="social-link" />
          <span>Confirmation</span>
        </div>
      </div>}
    </section>
  );
}

Wizard.propTypes = {
    wizard: PropTypes.string.isRequired,
}
