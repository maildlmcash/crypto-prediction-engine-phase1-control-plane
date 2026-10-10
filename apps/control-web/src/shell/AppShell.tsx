import React, { useState } from 'react';

const roles = ['Super Admin', 'Admin', 'Super Distributor', 'Distributor', 'Retailer', 'Customer'];

export const AppShell = () => {
  const [currentRole, setCurrentRole] = useState('Super Admin');
  const [section, setSection] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Crypto Prediction Engine - Control Plane <span className="text-xs bg-yellow-500/20 px-2 py-1 rounded ml-2">MOCK</span></h1>
        <select value={currentRole} onChange={e => setCurrentRole(e.target.value)} className="bg-slate-800 px-3 py-1 rounded">
          {roles.map(r => <option key={r}>{r}</option>)}
        </select>
      </header>
      <div className="flex">
        <nav className="w-64 border-r border-white/10 p-4">
          <button onClick={() => setSection('dashboard')} className="block w-full text-left p-2 hover:bg-white/5">Dashboard</button>
          {currentRole.includes('Admin') && <button onClick={() => setSection('providers')} className="block w-full text-left p-2 hover:bg-white/5">Provider Registry</button>}
          {currentRole.includes('Admin') && <button onClick={() => setSection('checklist')} className="block w-full text-left p-2 hover:bg-white/5">Admin Checklist</button>}
          <button onClick={() => setSection('roles')} className="block w-full text-left p-2 hover:bg-white/5">Role Matrix</button>
        </nav>
        <main className="flex-1 p-6">
          <p className="text-sm text-slate-400 mb-4">Current Role: {currentRole} | Section: {section} | Path remains /app</p>
          {section === 'dashboard' && <div>Role-specific dashboard for {currentRole} (MOCK data)</div>}
          {section === 'providers' && <div>Provider Registry - Status: NOT_TESTED (MOCK)</div>}
          {section === 'checklist' && <div>Editable Checklist with evidence tracker (MOCK)</div>}
          {section === 'roles' && <div>Role Capability Baseline from Phase Manual</div>}
        </main>
      </div>
    </div>
  );
};