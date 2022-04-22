/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Section6 from '../components/Section6'
import type { NextPage } from 'next'
import Image from 'next/image'
import LagrangeMobileLogo from '../public/Lagrange-logo-light.png'
const Index: NextPage = (props) => {
  const [isExpanded, toggleExpansion] = useState(true)

  return (
    <Section6 />
  )
}

export default Index
