"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  position: string;
  socials?: string[];
  
}

interface Committee {
  id: number;
  name: string;
  groupImage?: string;
  execMembers: TeamMember[];
  coreMembers: TeamMember[];
}

interface Convenors {
  groupImage: string;
  members: TeamMember[];
}

interface ManagingDirector {
  members: TeamMember[];
}

const conveners: Convenors = {
  groupImage: "/api/placeholder/1200/400",
  members: [
    {
      id: 1,
      name: "Nishchay Lamba",
      image: "/images/1.jpeg",
      position: "Convener",
    },
    {
      id: 2,
      name: "Kuljeet Singh Shekhawat",
      image: "/images/2.jpeg",
      position: "Convener",
    },
    {
      id: 3,
      name: "Ayaan Ahmed",
      image: "/images/3.jpeg",
      position: "Convener",
    },
    {
      id: 4,
      name: "Ayush Behera",
      image: "/images/4.jpeg",
      position: "Convener",
    },
    {
      id: 5,
      name: "Shivam Shandilya",
      image: "/images/5.jpeg",
      position: "Convener",
    },
    {
      id: 6,
      name: "Udita Rajput",
      image: "/images/6.jpeg",
      position: "Convener",
    },
  ],
};

const managingDirector: ManagingDirector = {
  members: [
    {
      id: 7,
      name: "Neet Jain",
      image: "/images/7.png",
      position: "Managing Director",
    },
    {
      id: 8,
      name: "Krishnav Gupta",
      image: "/images/8.png",
      position: "Managing Director",
    }
  ],
}

const committees: Committee[] = [
  {
    id: 3,
    name: "Web Development",
    execMembers: [
      { id: 24, name: "Pujan Modha", image: "/images/user1.png", position: "Lead" },
      { id: 25, name: "Vasu Verma", image: "/images/user1.png", position: "Lead" },
      { id: 26, name: "Arunabha Mukhopadhyay", image: "/images/user1.png", position: "Lead" },
      { id: 27, name: "Jatin Tilwani", image: "/images/user1.png", position: "Lead" },
      { id: 28, name: "Ayush Shashi", image: "/images/user1.png", position: "Lead" },
      { id: 29, name: "Kunal Yadav", image: "/images/user1.png", position: "Lead" },
    ],
    coreMembers: [
      { id: 164, name: "Abhiman Panwar", image: "/images/user2.png", position: "Core Member" },
      { id: 165, name: "Tanishq Choudhary", image: "/images/user2.png", position: "Core Member" },
      { id: 166, name: "Shubh Srivastava", image: "/images/user2.png", position: "Core Member" },
      { id: 167, name: "Nirmal Rajkumar", image: "/images/user2.png", position: "Core Member" },
      { id: 168, name: "K S Mahadevan", image: "/images/user2.png", position: "Core Member" },
      { id: 169, name: "Akshat Jaiswal", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  {
    id: 1,
    name: "Major Events",
    execMembers: [
      { id: 9, name: "Priyanshu", image: "/images/user1.png", position: "Lead" },
      { id: 10, name: "Tarun Joshi", image: "/images/user1.png", position: "Lead" },
      { id: 11, name: "Ikshita Bagla", image: "/images/user1.png", position: "Lead" },
      { id: 12, name: "Pranav Bharadwaj", image: "/images/user1.png", position: "Lead" },
      { id: 13, name: "Rhythm Taneja", image: "/images/user1.png", position: "Lead" },
      { id: 14, name: "Rishi Joshi", image: "/images/user1.png", position: "Lead" },
      { id: 15, name: "Amogh Bajpai", image: "/images/user1.png", position: "Lead" },
      { id: 16, name: "Jyeshtha Nainani", image: "/images/user1.png", position: "Lead" },
    ],
    coreMembers: [
      { id: 124, name: "Aditya Mall", image: "/images/user2.png", position: "Core Member" },
      { id: 125, name: "Meetasha Kapur", image: "/images/user2.png", position: "Core Member" },
      { id: 126, name: "Krish Vyas", image: "/images/user2.png", position: "Core Member" },
      { id: 127, name: "Tiya Chhabra", image: "/images/user2.png", position: "Core Member" },
      { id: 128, name: "Ansh Verma", image: "/images/user2.png", position: "Core Member" },
      { id: 129, name: "Devansh Kothari", image: "/images/user2.png", position: "Core Member" },
      { id: 130, name: "Siddharth Mandal", image: "/images/user2.png", position: "Core Member" },
      { id: 131, name: "Harsh Yadav", image: "/images/user2.png", position: "Core Member" },
      { id: 132, name: "Keshav Raj", image: "/images/user2.png", position: "Core Member" },
      { id: 133, name: "Shaivi Adesh", image: "/images/user2.png", position: "Core Member" },
      { id: 134, name: "Harman Kaur Bhambra", image: "/images/user2.png", position: "Core Member" },
      { id: 135, name: "Kshitij Verma", image: "/images/user2.png", position: "Core Member" },
      { id: 136, name: "Sushant Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 137, name: "Eshaan Saha", image: "/images/user2.png", position: "Core Member" },
      { id: 138, name: "Manthan Chawla", image: "/images/user2.png", position: "Core Member" },
      { id: 139, name: "Kakul Rawat", image: "/images/user2.png", position: "Core Member" },
      { id: 140, name: "Prem Mangwani", image: "/images/user2.png", position: "Core Member" },
      { id: 141, name: "Tanisha Mathur", image: "/images/user2.png", position: "Core Member" },
      { id: 142, name: "Yash Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 143, name: "Apoorv Shashwat", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  {
    id: 2,
    name: "Minor Events",
    execMembers: [
      { id: 17, name: "Akanksha Kumari", image: "/images/user1.png", position: "Lead" },
      { id: 18, name: "Lalit M Rao", image: "/images/user1.png", position: "Lead" },
      { id: 19, name: "Mansi Goel", image: "/images/user1.png", position: "Lead" },
      { id: 20, name: "Samarth Kakkar", image: "/images/user1.png", position: "Lead" },
      { id: 21, name: "Prarthana Srivastava", image: "/images/user1.png", position: "Lead" },
      { id: 22, name: "Aditya Kumar Mishra", image: "/images/user1.png", position: "Lead" },
      { id: 23, name: "Kritika Pahuja", image: "/images/user1.png", position: "Lead" },
    ],
    coreMembers: [
      { id: 144, name: "Agam Bhasin", image: "/images/user2.png", position: "Core Member" },
      { id: 145, name: "Shubham Lohia", image: "/images/user2.png", position: "Core Member" },
      { id: 146, name: "Sneha Dhanuka", image: "/images/user2.png", position: "Core Member" },
      { id: 147, name: "Krish Naik", image: "/images/user2.png", position: "Core Member" },
      { id: 148, name: "Suhani Goyal", image: "/images/user2.png", position: "Core Member" },
      { id: 149, name: "Shreesh Aggarwal", image: "/images/user2.png", position: "Core Member" },
      { id: 150, name: "Prakhar Srivastava", image: "/images/user2.png", position: "Core Member" },
      { id: 151, name: "Arjun Malhotra", image: "/images/user2.png", position: "Core Member" },
      { id: 152, name: "Janvi Chawla", image: "/images/user2.png", position: "Core Member" },
      { id: 153, name: "Paarth Yadav", image: "/images/user2.png", position: "Core Member" },
      { id: 154, name: "Gurleen Kaur", image: "/images/user2.png", position: "Core Member" },
      { id: 155, name: "Nitya Jain", image: "/images/user2.png", position: "Core Member" },
      { id: 156, name: "Prabal Pratap Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 157, name: "Dhruv Chaturvedi", image: "/images/user2.png", position: "Core Member" },
      { id: 158, name: "Krish Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 159, name: "Aayushi Sabharwal", image: "/images/user2.png", position: "Core Member" },
      { id: 160, name: "Shambhavi Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 161, name: "Mahak Agrawal", image: "/images/user2.png", position: "Core Member" },
      { id: 162, name: "Yash Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 163, name: "Apoorv Shashwat", image: "/images/user2.png", position: "Core Member" }
    ]
  },
 
  {
    id: 4,
    name: "Productions",
    execMembers: [
      { id: 30, name: "Ayush Jaiswal", image: "/images/user1.png", position: "Lead" },
      { id: 31, name: "Abhay Singh", image: "/images/user1.png", position: "Lead" },
      { id: 32, name: "Akshat", image: "/images/user1.png", position: "Lead" },
      { id: 33, name: "Archit Nigam", image: "/images/user1.png", position: "Lead" },
      { id: 34, name: "Himalaya Sharma", image: "/images/user1.png", position: "Lead" },
      { id: 35, name: "Dhairya Balani", image: "/images/user1.png", position: "Lead" },
      { id: 36, name: "Muskan Agarwal", image: "/images/user1.png", position: "Lead" },
      { id: 37, name: "Aradhya Khandelwal", image: "/images/user1.png", position: "Lead" },
    ],
    coreMembers: [
      { id: 170, name: "Krish Marwaha", image: "/images/user2.png", position: "Core Member" },
      { id: 171, name: "Udit Jhajhariya", image: "/images/user2.png", position: "Core Member" },
      { id: 172, name: "Satyam Rai", image: "/images/user2.png", position: "Core Member" },
      { id: 173, name: "Arushi Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 174, name: "Mansi Negi", image: "/images/user2.png", position: "Core Member" },
      { id: 175, name: "Piyush Agarwal", image: "/images/user2.png", position: "Core Member" },
      { id: 176, name: "Parv Rangbulla", image: "/images/user2.png", position: "Core Member" },
      { id: 177, name: "Tamanna Yadav", image: "/images/user2.png", position: "Core Member" },
      { id: 178, name: "Harshit Attri", image: "/images/user2.png", position: "Core Member" },
      { id: 179, name: "Satya Agrawal", image: "/images/user2.png", position: "Core Member" },
      { id: 180, name: "Tanmay Shah", image: "/images/user2.png", position: "Core Member" },
      { id: 181, name: "Animesh Jain", image: "/images/user2.png", position: "Core Member" },
      { id: 182, name: "Akshat Attri", image: "/images/user2.png", position: "Core Member" },
      { id: 183, name: "Shifa Khan", image: "/images/user2.png", position: "Core Member" },
      { id: 184, name: "Mumukshu Bohra", image: "/images/user2.png", position: "Core Member" },
      { id: 185, name: "Aaradhya Deep Dwivedi", image: "/images/user2.png", position: "Core Member" },
      { id: 186, name: "Subhash Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 187, name: "Siddham Gupta", image: "/images/user2.png", position: "Core Member" },
      { id: 188, name: "Kavya Kumar", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  {
    id: 5,
    name: "Operations",
    execMembers: [
      { id: 38, name: "Sajal Panwar", image: "/images/user1.png", position: "Lead" },
      { id: 39, name: "Pratyush Sharma", image: "/images/user1.png", position: "Lead" },
      { id: 40, name: "Daksh Rupani", image: "/images/user1.png", position: "Lead" },
      { id: 41, name: "Kushar Bajaj", image: "/images/user1.png", position: "Lead" },
      { id: 42, name: "Armaan Bedi", image: "/images/user1.png", position: "Lead" },
      { id: 43, name: "Siddharth Dabas", image: "/images/user1.png", position: "Lead" },
      { id: 44, name: "Jaskaran Singh", image: "/images/user1.png", position: "Lead" },
      { id: 45, name: "Abhijeet Anand", image: "/images/user1.png", position: "Lead" },
      { id: 46, name: "Hanish Gori", image: "/images/user1.png", position: "Lead" },
      { id: 47, name: "Sai Bhanage", image: "/images/user1.png", position: "Lead" },
      { id: 48, name: "Harsh Tomar", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 189, name: "Daksh Dev Vashishta", image: "/images/user2.png", position: "Core Member" },
      { id: 190, name: "Soham Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 191, name: "Madhav Choudhary", image: "/images/user2.png", position: "Core Member" },
      { id: 192, name: "Prachi Chauhan", image: "/images/user2.png", position: "Core Member" },
      { id: 193, name: "Aditya Agrawal", image: "/images/user2.png", position: "Core Member" },
      { id: 194, name: "Ashutosh Pareek", image: "/images/user2.png", position: "Core Member" },
      { id: 195, name: "Vibhesh Mishra", image: "/images/user2.png", position: "Core Member" },
      { id: 196, name: "Akshat Mishra", image: "/images/user2.png", position: "Core Member" },
      { id: 197, name: "Shivam Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 198, name: "Viplav Kumar", image: "/images/user2.png", position: "Core Member" },
      { id: 199, name: "Nitish Rao", image: "/images/user2.png", position: "Core Member" },
      { id: 200, name: "Palak Chawla", image: "/images/user2.png", position: "Core Member" },
      { id: 201, name: "Ishani Lohar", image: "/images/user2.png", position: "Core Member" },
      { id: 202, name: "Diya", image: "/images/user2.png", position: "Core Member" },
      { id: 203, name: "Vaibhav Bansal", image: "/images/user2.png", position: "Core Member" },
      { id: 204, name: "Shreyas", image: "/images/user2.png", position: "Core Member" },
      { id: 205, name: "Aaditya Rajput", image: "/images/user2.png", position: "Core Member" },
      { id: 206, name: "Amaan Hussain", image: "/images/user2.png", position: "Core Member" },
      { id: 207, name: "Aryaveer", image: "/images/user2.png", position: "Core Member" },
      { id: 208, name: "Sukrit Sinha", image: "/images/user2.png", position: "Core Member" },
      { id: 209, name: "Soumya Arora", image: "/images/user2.png", position: "Core Member" },
      { id: 210, name: "Dev Dhawan", image: "/images/user2.png", position: "Core Member" },
      { id: 211, name: "Kalash Choudhary", image: "/images/user2.png", position: "Core Member" },
      { id: 212, name: "Arnav Chaudhary", image: "/images/user2.png", position: "Core Member" },
      { id: 213, name: "Sourya KVS", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  {
    id: 6,
    name: "Sponsorships",
    execMembers: [
      { id: 49, name: "Vidit Sood", image: "/images/user1.png", position: "Lead" },
      { id: 50, name: "Anushka Sharma", image: "/images/user1.png", position: "Lead" },
      { id: 51, name: "Rohit Singh", image: "/images/user1.png", position: "Lead" },
      { id: 52, name: "Anubhav Jagnani", image: "/images/user1.png", position: "Lead" },
      { id: 53, name: "Anuvansh Maheshwari", image: "/images/user1.png", position: "Lead" },
      { id: 54, name: "Tushar Khanchandani", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 214, name: "Dev Kanabar", image: "/images/user2.png", position: "Core Member" },
      { id: 215, name: "Krish Jaiswal", image: "/images/user2.png", position: "Core Member" },
      { id: 216, name: "Mahi Sachdeva", image: "/images/user2.png", position: "Core Member" },
      { id: 217, name: "Pranjal Jain", image: "/images/user2.png", position: "Core Member" },
      { id: 218, name: "Bhumi Kumari", image: "/images/user2.png", position: "Core Member" },
      { id: 219, name: "Siddham Gupta", image: "/images/user2.png", position: "Core Member" },
      { id: 220, name: "Raj Maraiya", image: "/images/user2.png", position: "Core Member" },
      { id: 221, name: "Mitakshara Yadav", image: "/images/user2.png", position: "Core Member" },
      { id: 222, name: "Arnab Roy", image: "/images/user2.png", position: "Core Member" },
      { id: 223, name: "Aarav Sharma", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  {
    id: 7,
    name: "Finance & Registration",
    execMembers: [
      { id: 55, name: "Pavni Jain", image: "/images/user1.png", position: "Lead" },
      { id: 56, name: "Kanishk Diwedi", image: "/images/user1.png", position: "Lead" },
      { id: 57, name: "Priyanshi Bansal", image: "/images/user1.png", position: "Lead" },
      { id: 58, name: "Tathya Govil", image: "/images/user1.png", position: "Lead" },
      { id: 59, name: "Jatin Bhuria", image: "/images/user1.png", position: "Lead" },
      { id: 60, name: "Eish Agarwal", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 224, name: "Maanya Gusain", image: "/images/user2.png", position: "Core Member" },
      { id: 225, name: "Hitesh Soni", image: "/images/user2.png", position: "Core Member" },
      { id: 226, name: "Harsh Dadhich", image: "/images/user2.png", position: "Core Member" },
      { id: 227, name: "Anshika Kumari", image: "/images/user2.png", position: "Core Member" },
      { id: 228, name: "Mukund Maheshwari", image: "/images/user2.png", position: "Core Member" },
      { id: 229, name: "Navya Rastogi", image: "/images/user2.png", position: "Core Member" },
      { id: 230, name: "Puneet Bang", image: "/images/user2.png", position: "Core Member" },
      { id: 231, name: "Milan Deep Kaur", image: "/images/user2.png", position: "Core Member" }
    ]
  },

  {
    id: 8,
    name: "Curations",
    execMembers: [
      { id: 61, name: "Arya Vardhan", image: "/images/user1.png", position: "Lead" },
      { id: 62, name: "Kanishka Pareek", image: "/images/user1.png", position: "Lead" },
      { id: 63, name: "Aagman Shukla", image: "/images/user1.png", position: "Lead" },
      { id: 64, name: "Shivam Ramasdani", image: "/images/user1.png", position: "Lead" },
      { id: 65, name: "Alokik Agarwal", image: "/images/user1.png", position: "Lead" },
      { id: 66, name: "Ram Chandra", image: "/images/user1.png", position: "Lead" },
      { id: 67, name: "Daksh Jain", image: "/images/user1.png", position: "Lead" },
      { id: 68, name: "Nitya Shukla", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 232, name: "Anshikka Mittal", image: "/images/user2.png", position: "Core Member" },
      { id: 233, name: "Shagun Chaturvedi", image: "/images/user2.png", position: "Core Member" },
      { id: 234, name: "Hitesh Soni", image: "/images/user2.png", position: "Core Member" },
      { id: 235, name: "Anant Srivastav", image: "/images/user2.png", position: "Core Member" },
      { id: 236, name: "Ashutosh", image: "/images/user2.png", position: "Core Member" },
      { id: 237, name: "Manvi Mishra", image: "/images/user2.png", position: "Core Member" },
      { id: 238, name: "Yashvi Garg", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  
  {
    id: 9,
    name: "Media",
    execMembers: [
      { id: 69, name: "Ashish Pandey", image: "/images/user1.png", position: "Lead" },
      { id: 70, name: "Prerit Verma", image: "/images/user1.png", position: "Lead" },
      { id: 71, name: "Asman Bindra", image: "/images/user1.png", position: "Lead" },
      { id: 72, name: "Jyotiraditya Singh Parihar", image: "/images/user1.png", position: "Lead" },
      { id: 73, name: "Vedant Agrawalla", image: "/images/user1.png", position: "Lead" },
      { id: 74, name: "Shrey Aditya", image: "/images/user1.png", position: "Lead" },
      { id: 75, name: "Suryansh Jain", image: "/images/user1.png", position: "Lead" },
      { id: 76, name: "Mayank Chopra", image: "/images/user1.png", position: "Lead" },
      { id: 77, name: "Yash Dhingra", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 239, name: "Aditya Gandhi", image: "/images/user2.png", position: "Core Member" },
      { id: 240, name: "Anil Jangir", image: "/images/user2.png", position: "Core Member" },
      { id: 241, name: "Anushree Kanoongo", image: "/images/user2.png", position: "Core Member" },
      { id: 242, name: "Apratim Pandey", image: "/images/user2.png", position: "Core Member" },
      { id: 243, name: "Ayushi Sahu", image: "/images/user2.png", position: "Core Member" },
      { id: 244, name: "Chirag Gupta", image: "/images/user2.png", position: "Core Member" },
      { id: 245, name: "Harsh Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 246, name: "Het Patel", image: "/images/user2.png", position: "Core Member" },
      { id: 247, name: "Kamalnayan Panda", image: "/images/user2.png", position: "Core Member" },
      { id: 248, name: "Kanav Vats", image: "/images/user2.png", position: "Core Member" },
      { id: 249, name: "Kartikeya Chaturvedi", image: "/images/user2.png", position: "Core Member" },
      { id: 250, name: "Keerti Rajani", image: "/images/user2.png", position: "Core Member" },
      { id: 251, name: "Kumar Gourav Behera", image: "/images/user2.png", position: "Core Member" },
      { id: 252, name: "Manish Ganesha", image: "/images/user2.png", position: "Core Member" },
      { id: 253, name: "Meemansha Srivastava", image: "/images/user2.png", position: "Core Member" },
      { id: 254, name: "Mehul Bansal", image: "/images/user2.png", position: "Core Member" },
      { id: 255, name: "Mehul Srivastava", image: "/images/user2.png", position: "Core Member" },
      { id: 256, name: "Mishty Gupta", image: "/images/user2.png", position: "Core Member" },
      { id: 257, name: "Nemat Sachdeva", image: "/images/user2.png", position: "Core Member" },
      { id: 258, name: "Nikunj Gupta", image: "/images/user2.png", position: "Core Member" },
      { id: 259, name: "Nirmay Nimkar", image: "/images/user2.png", position: "Core Member" },
      { id: 260, name: "Nishant Prasad", image: "/images/user2.png", position: "Core Member" },
      { id: 261, name: "Paridhi Dua", image: "/images/user2.png", position: "Core Member" },
      { id: 262, name: "Parth Mehta", image: "/images/user2.png", position: "Core Member" },
      { id: 263, name: "Pranav Joshi", image: "/images/user2.png", position: "Core Member" },
      { id: 264, name: "Rishit Prakash Jaiswal", image: "/images/user2.png", position: "Core Member" },
      { id: 265, name: "Tushar Shandilya", image: "/images/user2.png", position: "Core Member" },
      { id: 266, name: "Ziya Parween", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  
  {
    id: 10,
    name: "Social Media",
    execMembers: [
      { id: 78, name: "Amit Patro", image: "/images/user1.png", position: "Lead" },
      { id: 79, name: "Nishant Mishra", image: "/images/user1.png", position: "Lead" },
      { id: 80, name: "Aayush Katyal", image: "/images/user1.png", position: "Lead" },
      { id: 81, name: "Gunn Verma", image: "/images/user1.png", position: "Lead" },
      { id: 82, name: "Sai Praketh", image: "/images/user1.png", position: "Lead" },
      { id: 83, name: "Aditi Banga", image: "/images/user1.png", position: "Lead" },
      { id: 84, name: "Palak Chawla", image: "/images/user1.png", position: "Lead" },
      { id: 85, name: "Ritesh Mishra", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 267, name: "Vansh Vashisth", image: "/images/user2.png", position: "Core Member" },
      { id: 268, name: "Vaibhav Krishali", image: "/images/user2.png", position: "Core Member" },
      { id: 269, name: "Manalee Tamrekar", image: "/images/user2.png", position: "Core Member" },
      { id: 270, name: "Diya Sekhani", image: "/images/user2.png", position: "Core Member" },
      { id: 271, name: "Reet Ginotra", image: "/images/user2.png", position: "Core Member" },
      { id: 272, name: "Gaurav Kapoor", image: "/images/user2.png", position: "Core Member" },
      { id: 273, name: "Ipshita Raj", image: "/images/user2.png", position: "Core Member" },
      { id: 274, name: "Agrim Jain", image: "/images/user2.png", position: "Core Member" },
      { id: 275, name: "Ritwiza Aggarwal", image: "/images/user2.png", position: "Core Member" },
      { id: 276, name: "Krishna Chaturvedi", image: "/images/user2.png", position: "Core Member" },
      { id: 277, name: "Janvi Thawani", image: "/images/user2.png", position: "Core Member" },
      { id: 278, name: "Aaryan Bhatiya", image: "/images/user2.png", position: "Core Member" },
      { id: 279, name: "Prabhutva Gupta", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  
  {
    id: 11,
    name: "Graphic Design",
    execMembers: [
      { id: 86, name: "Nishant Mishra", image: "/images/user1.png", position: "Lead" },
      { id: 87, name: "Dhruv Anand", image: "/images/user1.png", position: "Lead" },
      { id: 88, name: "Diya Gaur", image: "/images/user1.png", position: "Lead" },
      { id: 89, name: "Harsh Kamra", image: "/images/user1.png", position: "Lead" },
      { id: 90, name: "Shreya Saihgal", image: "/images/user1.png", position: "Lead" },
      { id: 91, name: "Himanshu Sagar", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 280, name: "Aakriti Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 281, name: "Parushi Srivastava", image: "/images/user2.png", position: "Core Member" },
      { id: 282, name: "Sankalp Jhamb", image: "/images/user2.png", position: "Core Member" },
      { id: 283, name: "Naman Verma", image: "/images/user2.png", position: "Core Member" },
      { id: 284, name: "Bhavya Wadhwani", image: "/images/user2.png", position: "Core Member" },
      { id: 285, name: "Shashank Bharat", image: "/images/user2.png", position: "Core Member" },
      { id: 286, name: "Arsh Adil", image: "/images/user2.png", position: "Core Member" },
      { id: 287, name: "Guneet Pahwa", image: "/images/user2.png", position: "Core Member" },
      { id: 288, name: "Aryan Verma", image: "/images/user2.png", position: "Core Member" },
      { id: 289, name: "Ashutosh Pareek", image: "/images/user2.png", position: "Core Member" },
      { id: 290, name: "Pulkit Soni", image: "/images/user2.png", position: "Core Member" },
      { id: 291, name: "Aditi Shringi", image: "/images/user2.png", position: "Core Member" },
      { id: 292, name: "Saksham Jain", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  {
    id: 12,
    name: "Marketing",
    execMembers: [
      { id: 92, name: "Ani Gupta", image: "/images/user1.png", position: "Lead" },
      { id: 93, name: "Puneet Sharma", image: "/images/user1.png", position: "Lead" },
      { id: 94, name: "Shubhdeep Singh", image: "/images/user1.png", position: "Lead" },
      { id: 95, name: "Yash Thapa", image: "/images/user1.png", position: "Lead" },
      { id: 96, name: "Harshneet Khana", image: "/images/user1.png", position: "Lead" },
      { id: 97, name: "Aniket Mishra", image: "/images/user1.png", position: "Lead" },
      { id: 98, name: "Aditya Gupta", image: "/images/user1.png", position: "Lead" },
      { id: 99, name: "Aditya Nalwaya", image: "/images/user1.png", position: "Lead" },
      { id: 100, name: "Vivek Shekhawat", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 293, name: "Deepanshu Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 294, name: "Vansh Chuttani", image: "/images/user2.png", position: "Core Member" },
      { id: 295, name: "Aryan Arya", image: "/images/user2.png", position: "Core Member" },
      { id: 296, name: "Aakrisht Attri", image: "/images/user2.png", position: "Core Member" },
      { id: 297, name: "Meet Jain", image: "/images/user2.png", position: "Core Member" },
      { id: 298, name: "Piyush Bavtwal", image: "/images/user2.png", position: "Core Member" },
      { id: 299, name: "Shivang Dutta", image: "/images/user2.png", position: "Core Member" },
      { id: 300, name: "Prabhveer", image: "/images/user2.png", position: "Core Member" },
      { id: 301, name: "Shravni", image: "/images/user2.png", position: "Core Member" },
      { id: 302, name: "Kartik Garg", image: "/images/user2.png", position: "Core Member" },
      { id: 303, name: "Rishabh Tiwari", image: "/images/user2.png", position: "Core Member" },
      { id: 304, name: "Shobit", image: "/images/user2.png", position: "Core Member" },
      { id: 305, name: "Surbhi Porwal", image: "/images/user2.png", position: "Core Member" }
    ]
  },

  {
    id: 13,
    name: "Hospitality",
    execMembers: [
      { id: 101, name: "Vrishti Jain", image: "/images/user1.png", position: "Lead" },
      { id: 102, name: "Shreyas Kumar", image: "/images/user1.png", position: "Lead" },
      { id: 103, name: "Shaurya Pratap Singh", image: "/images/user1.png", position: "Lead" },
      { id: 104, name: "Harshit Rawat", image: "/images/user1.png", position: "Lead" },
      { id: 105, name: "Mayank Maheshwari", image: "/images/user1.png", position: "Lead" },
      { id: 106, name: "Auritro Banerjee", image: "/images/user1.png", position: "Lead" },
      { id: 107, name: "Akash Mukherjee", image: "/images/user1.png", position: "Lead" },
      { id: 108, name: "Anshika Sethi", image: "/images/user1.png", position: "Lead" },
      { id: 109, name: "Bhavya Malik", image: "/images/user1.png", position: "Lead" },
      { id: 110, name: "Rishita Jain", image: "/images/user1.png", position: "Lead" },
      { id: 111, name: "Anushka Singh", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 306, name: "Aarav Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 307, name: "Aditya Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 308, name: "Priyanshi Bharadwaj", image: "/images/user2.png", position: "Core Member" },
      { id: 309, name: "Himank Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 310, name: "Himanshi Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 311, name: "Jatin Sangewar", image: "/images/user2.png", position: "Core Member" },
      { id: 312, name: "Khushi Arya", image: "/images/user2.png", position: "Core Member" },
      { id: 313, name: "Krishna Goel", image: "/images/user2.png", position: "Core Member" },
      { id: 314, name: "Mannat Chugh", image: "/images/user2.png", position: "Core Member" },
      { id: 315, name: "Pranav Upadhyay", image: "/images/user2.png", position: "Core Member" },
      { id: 316, name: "Gautam Kakkar", image: "/images/user2.png", position: "Core Member" },
      { id: 317, name: "Pearl Katoch", image: "/images/user2.png", position: "Core Member" },
      { id: 318, name: "Aditya Kulkarni", image: "/images/user2.png", position: "Core Member" },
      { id: 319, name: "Aadhya Mahajan", image: "/images/user2.png", position: "Core Member" },
      { id: 320, name: "Arif Islam Shaik", image: "/images/user2.png", position: "Core Member" },
      { id: 321, name: "Jiya Gupta", image: "/images/user2.png", position: "Core Member" },
      { id: 322, name: "Sanya Sinha", image: "/images/user2.png", position: "Core Member" },
      { id: 323, name: "Vibhas Aggarwal", image: "/images/user2.png", position: "Core Member" },
      { id: 324, name: "Arshita Sinha", image: "/images/user2.png", position: "Core Member" },
      { id: 325, name: "Anubhuti Anurag", image: "/images/user2.png", position: "Core Member" },
      { id: 326, name: "Ojas Kumar", image: "/images/user2.png", position: "Core Member" },
      { id: 327, name: "Sakya Samved Inukoti", image: "/images/user2.png", position: "Core Member" },
      { id: 328, name: "Priyanshi Bhadauria", image: "/images/user2.png", position: "Core Member" },
      { id: 329, name: "Sophie Jotshi", image: "/images/user2.png", position: "Core Member" }
    ]
  },
  
  {
    id: 14,
    name: "Arts and Crafts",
    execMembers: [
      { id: 112, name: "Maldev Singh Chouhan", image: "/images/user1.png", position: "Lead" },
      { id: 113, name: "Prishita Awasthi", image: "/images/user1.png", position: "Lead" },
      { id: 114, name: "Kalash Mehrotra", image: "/images/user1.png", position: "Lead" },
      { id: 115, name: "Nikunj Mehrotra", image: "/images/user1.png", position: "Lead" },
      { id: 116, name: "Arindam Yadav", image: "/images/user1.png", position: "Lead" },
      { id: 117, name: "Vanshika Sharma", image: "/images/user1.png", position: "Lead" },
      { id: 118, name: "Nidhi Gehlot", image: "/images/user1.png", position: "Lead" },
      { id: 119, name: "Ananya Gupta", image: "/images/user1.png", position: "Lead" },
      { id: 120, name: "Ayush Batra", image: "/images/user1.png", position: "Lead" },
      { id: 121, name: "Jacqueline Priyanka Pinto", image: "/images/user1.png", position: "Lead" },
      { id: 122, name: "Aarsheyee Poudyal", image: "/images/user1.png", position: "Lead" },
      { id: 123, name: "Sakshi Srivastava", image: "/images/user1.png", position: "Lead" }
    ],
    coreMembers: [
      { id: 330, name: "Rini Khandelwal", image: "/images/user2.png", position: "Core Member" },
      { id: 331, name: "Gunjan Goyal", image: "/images/user2.png", position: "Core Member" },
      { id: 332, name: "Vania Bhargava", image: "/images/user2.png", position: "Core Member" },
      { id: 333, name: "Prisha Kumari", image: "/images/user2.png", position: "Core Member" },
      { id: 334, name: "Nupur Anand Galphade", image: "/images/user2.png", position: "Core Member" },
      { id: 335, name: "Sakshi Sharma", image: "/images/user2.png", position: "Core Member" },
      { id: 336, name: "Akshat Gaur", image: "/images/user2.png", position: "Core Member" },
      { id: 337, name: "Ankit Singh", image: "/images/user2.png", position: "Core Member" },
      { id: 338, name: "Krati Garg", image: "/images/user2.png", position: "Core Member" },
      { id: 339, name: "Priyanshi Bhadauria", image: "/images/user2.png", position: "Core Member" },
      { id: 340, name: "Sarah Beg", image: "/images/user2.png", position: "Core Member" },
      { id: 341, name: "Aastha Bhardwaj", image: "/images/user2.png", position: "Core Member" },
      { id: 342, name: "Shreya Chauhan", image: "/images/user2.png", position: "Core Member" },
      { id: 343, name: "Kumar Gaurav", image: "/images/user2.png", position: "Core Member" },
      { id: 344, name: "Divyanshi Goel", image: "/images/user2.png", position: "Core Member" },
      { id: 345, name: "Anvesha Sahni", image: "/images/user2.png", position: "Core Member" },
      { id: 346, name: "Kumar Utsav", image: "/images/user2.png", position: "Core Member" },
      { id: 347, name: "Paakhi Singal", image: "/images/user2.png", position: "Core Member" },
      { id: 348, name: "Ananya Khandelwal", image: "/images/user2.png", position: "Core Member" },
      { id: 349, name: "Riya Tripathi", image: "/images/user2.png", position: "Core Member" },
      { id: 350, name: "Yashvir Singh Chauhan", image: "/images/user2.png", position: "Core Member" },
      { id: 351, name: "Bhavya Bansal", image: "/images/user2.png", position: "Core Member" },
      { id: 352, name: "Tamanna Lalwani", image: "/images/user2.png", position: "Core Member" },
      { id: 353, name: "Anushka Agarwal", image: "/images/user2.png", position: "Core Member" },
      { id: 354, name: "Sarthak Gupta", image: "/images/user2.png", position: "Core Member" },
      { id: 355, name: "Anvi Sarbhai", image: "/images/user2.png", position: "Core Member" },
      { id: 356, name: "Vidita Sachdeva", image: "/images/user2.png", position: "Core Member" },
      { id: 357, name: "Thanvi Reddy Abbavaram", image: "/images/user2.png", position: "Core Member" },
      { id: 358, name: "Shivani Chaudhary", image: "/images/user2.png", position: "Core Member" },
      { id: 359, name: "Bhanuja Ramuka", image: "/images/user2.png", position: "Core Member" },
      { id: 360, name: "Srinidhi Dulam", image: "/images/user2.png", position: "Core Member" },
      { id: 361, name: "Divya Jangid", image: "/images/user2.png", position: "Core Member" },
      { id: 362, name: "Mahi Khullar", image: "/images/user2.png", position: "Core Member" },
      { id: 363, name: "Saachi Jain", image: "/images/user2.png", position: "Core Member" },
      { id: 364, name: "Aanya Katyar", image: "/images/user2.png", position: "Core Member" },
      { id: 365, name: "Anadita Puri", image: "/images/user2.png", position: "Core Member" }
    ]
  }
];

type Selection = { type: "conveners" } | { type: "committee"; data: Committee } | { type: "managingDirectors" };


 
const SidebarItem = ({ 
  label, 
  active, 
  onSelect 
}: { 
  label: string; 
  active: boolean; 
  onSelect: () => void;
}) => {
  return (
    <button
      onClick={onSelect}
      aria-label={`Select ${label}`}
      className={`
        w-full
        text-left
        p-4
        relative
        overflow-hidden
        transition-all
        duration-300
        flex
        items-center
        group
        ${active
          ? "bg-gradient-to-r from-indigo-400/20 via-indigo-400/10 to-transparent text-white"
          : "hover:bg-black-400/10 text-gray-400 hover:text-gray-200"
        }
      `}
    >
      <div
        className={`
          absolute
          inset-0
          transition-opacity
          duration-500
          opacity-0
          group-hover:opacity-100
          bg-gradient-to-r
          from-purple-400/10
          via-indigo-300/20
          to-transparent
        `}
      />

      <div className="relative">
        <h3 
          className={`
            text-lg
            font-medium
            transition-all
            duration-300
            ${active
              ? "bg-gradient-to-r from-blue-200 to-indigo-400 bg-clip-text text-transparent" 
              : "text-gray-400 group-hover:text-gray-200"
            }
          `}
        >
          {label}
        </h3>
      </div>
    </button>
  );
};

const MobileMenu = ({ 
  isOpen, 
  onClose, 
  children 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-20 left-0 bottom-0 w-64 bg-black border-r border-gray-800 z-50 overflow-y-auto"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
function MemberCard({ member }: { member: TeamMember }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-gray-800/50 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg border-2 border-transparent hover:border-indigo-500 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Border */}
      <div className="absolute inset-0 rounded-xl border-0 border-gradient-to-r from-white-100 to-indio-500 pointer-events-none"></div>

      <div className="relative w-full pt-[133.33%] overflow-hidden rounded-t-xl">
        {/* Image */}
        <Image
          src={member.image}
          alt={`Profile picture of ${member.name}`}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 rounded-t-xl absolute top-0 left-0"
        />
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none rounded-t-xl"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 0.3 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card Content */}
      <motion.div
        className="absolute bottom-0 p-6 text-center w-full"
        animate={{
          y: isHovered ? -5 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)]">
          {member.name}
        </h2>
        <p className="text-sm text-gray-300 font-light transition-colors group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)]">
          {member.position}
        </p>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-white-500 to-indigo-500 animate-pulse"></div>
        <div className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-white-500 to-indigo-500 blur-md"></div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamsPage() {
  const [selection, setSelection] = useState<Selection>({ type: "conveners" });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const gradientTextClass = "bg-gradient-to-r from-purple-100 via-indigo-500 to-purple-500 text-transparent bg-clip-text animate-gradient [text-shadow:0_0_5px_rgba(255,0,128,0.3),0_0_10px_rgba(255,0,128,0.2),0_0_15px_rgba(255,0,128,0.1)]";



  const handleSelection = (newSelection: Selection) => {
    setSelection(newSelection);
    setIsMobileMenuOpen(false);
  };

  const getHeaderText = () => {
    if (selection.type === "conveners" || selection.type === "managingDirectors") {
      return "OUR TEAMS";
    }
    return selection.data.name;
  };

  const NavigationItems = () => (
    <>
      <SidebarItem
        label="Conveners"
        active={selection.type === "conveners"}
        onSelect={() => handleSelection({ type: "conveners" })}
      />
      <SidebarItem
        label="Managing Directors"
        active={selection.type === "managingDirectors"}
        onSelect={() => handleSelection({ type: "managingDirectors" })}
      />
      {committees.map((committee) => (
        <SidebarItem
          key={committee.id}
          label={committee.name}
          active={selection.type === "committee" && selection.data.id === committee.id}
          onSelect={() => handleSelection({ type: "committee", data: committee })}
        />
      ))}
    </>
  );

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Page Header (below main navbar) */}
      <div className="sticky top-14 z-30 bg-black border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-400 hover:text-white"
          >
            <Menu size={24} />
          </button>
          <h3 className={`text-4xl font-bold ${gradientTextClass}`}>
            {getHeaderText()}
          </h3>
          <div className="w-6" />
        </div>
      </div>

      {/* Universal Sidebar Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <NavigationItems />
      </MobileMenu>

      {/* Main Content */}
      <div className="p-4 lg:p-6">
        <AnimatePresence mode="wait">
          {selection.type === "conveners" ? (
            <motion.div
              key="conveners"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-48 lg:h-[297px] mb-6">
                <Image
                  src={conveners.groupImage}
                  alt="Group Photo"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {conveners.members.map((convener) => (
                  <MemberCard key={convener.id} member={convener} />
                ))}
              </div>
            </motion.div>
          ) : selection.type === "managingDirectors" ? (
            <motion.div
              key="managingDirectors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {managingDirector.members.map((director) => (
                  <MemberCard key={director.id} member={director} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={selection.data.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <section className="mb-6">
                <h2 className={`text-2xl font-bold mb-4 ${gradientTextClass}`}>
                  Executive Committee
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                  {selection.data.execMembers.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </section>
              {selection.type === "committee" && (
  <section>
    <h2 className={`text-2xl font-bold mb-4 ${gradientTextClass}`}>
      Core Committee
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {selection.data.coreMembers.map((member) => (
        <div
          key={member.id}
          className="group relative bg-transparent backdrop-blur-sm overflow-hidden rounded-xl shadow-lg border-2 border-transparent p-4 "
        >
          {selection.data.id === 3 && (
            <div className="relative w-full h-36 overflow-hidden rounded-t-xl ">
              <Image
                src={member.image}
                alt={`Profile picture of ${member.name}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
          )}

          {/* Name & Position (Always Visible) */}
          <div className="text-center p-2 ">
            <h2 className="text-lg font-semibold text-white">{member.name}</h2>
            <p className="text-sm text-gray-400">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
