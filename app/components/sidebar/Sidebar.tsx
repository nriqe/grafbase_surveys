"use client";

import React from 'react'
import { Offcanvas } from "react-bootstrap"

const Sidebar = () => {

  return (
    <aside className="bg-dark h-100 shadow-lg text-white" data-bs-theme="dark">
        <Offcanvas.Header closeButton className="d-flex d-md-none">
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>sdffds</div>
          <span>Sidebar</span>
        </Offcanvas.Body>
    </aside>
  )
}

export default Sidebar