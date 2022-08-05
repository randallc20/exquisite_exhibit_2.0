import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import PinDetail from '../components/PinDetail';
import CreatePin from '../components/CreatePin';
import Search from '../components/Search';

function Pins({ user, setUser, setDisplayPin, displayPin }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user}
          setUser={setUser}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route
            path="/"
            element={<Feed user={user} setDisplayPin={setDisplayPin} />}
          />
          <Route
            path="/category/:categoryId"
            element={<Feed setDisplayPin={setDisplayPin} />}
          />
          <Route
            path="/pin-detail/:pinId"
            element={<PinDetail user={user} displayPin={displayPin} />}
          />
          <Route path="/create-pin" element={<CreatePin user={user} />} />
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default Pins;