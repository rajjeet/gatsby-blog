---
title: Quoting a Kitchen with Style 
date: "2019-02-23"
draft: false
author: Rajjeet
category: Side Hustle
image: './rawpixel-780494-unsplash.jpg'
description: A desktop application that calculates a quotation for a high-end kitchen based on an client's algorithm and various input types. 
tags: 
    - Kitchen Quoter    
    - Electron 
    - React
---

## Overview
My brother-in-law runs a kitchen shop, <a href="http://www.landmarkkitchens.ca/" alt="Landmark Kitchen Concepts"
target="_blank">Landmark Kitchens Concepts</a>, and he asked me 
to build him a small tool to help him quote his clients in a professional way. The tool 
should accomplish a few key objectives:
1. Resonate a modern, professional vibe in the presence of his clients
2. Allow quick adjustments on the spot without busting out a calculator
3. Algorithm can be tweaked by him over time in response to product changes
4. Easy to use where other employees can deliver quotes in his absence 
5. (Bonus) Build an invoice out of the finalized set of parameters and quote

So far, I prototyped a single page desktop application as shown below. 

<div class="ui container">
    <img class="ui image" src="/gifs/kitchen-quoter.gif" alt="Kitchen Quoter" />    
</div>

_Kitchen Quotation Tool built using Electron JS_

I built this using <a href="https://electronjs.org/" target="_blank" alt="ElectronJS">Electron</a>, a
tool used for building cross-platform desktop apps with web syntax (HTML/CSS/JavaScript). For my 
project, I'm using React, Redux for state management, and Semantic UI React for a polished
interface.  

## The Why
The design aims to limit user effort and time needed to generate a quote. The quoter 
shouldn't spend to much time recalculating quotes and more time attending to the needs 
of his or her client at the moment. Also, the quoter wants to appear professional
by assuring their clients that they follow their guidelines and policies
when handing out official quotes.     


