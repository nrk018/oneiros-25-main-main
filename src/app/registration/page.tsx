"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { StepIndicator } from "@/components/stepindicator"
import axios from 'axios';
import Image from "next/image"

/*
import {
  Gloock,
  Instrument_Sans,
  Montserrat,
  Inclusive_Sans,
} from "next/font/google";
*/
// Configure fonts
/*
const gloock = Gloock({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gloock",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-instrument-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inclusiveSans = Inclusive_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inclusive-sans",
});
*/

const steps = ["Team Information", "Event Selection", "Submission"]
const events = [
  {
    name: "Destival",
    description:
      "The stage is set, the beats are dropping, and the best dancers are here to own it. Destival brings top talent from everywhere to battle it out, delivering high-energy performances that set the floor on fire. Get ready for a dance showdown like never before!",
  },
  {
    name: "Requiem",
    description:
      "Requiem is a thrilling competition that tests participants&#39; strategic thinking and teamwork abilities."
  },
  {
    name: "Cosmos",
    description: "Cosmos is an innovative event that explores the intersection of technology and imagination.",
  },
]

export default function MajortRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    teamLeader: "",
    teamLeaderEmail: "",
    teamLeaderContact: "",
    teamLeaderIdCard: "",
    collegeName: "",
    collegeRegion: "",
    teamName: "",
    teamMembersCount: "",
    teamMembersNames: "",
    selectedEvent: "",
    entryLink: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Send data to backend
      await axios.post("/api/register", formData);
  
      console.log("Form submitted successfully");
  
      // Reset form data
      setFormData({
        teamLeader: "",
        teamLeaderEmail: "",
        teamLeaderContact: "",
        teamLeaderIdCard: "",
        collegeName: "",
        collegeRegion: "",
        teamName: "",
        teamMembersCount: "",
        teamMembersNames: "",
        selectedEvent: "",
        entryLink: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    
       <><div className="flex flex-col items-center justify-center mt-[10vh]">
       <Image src="/neon-with.png" alt="Logo" width={200} height={100} className="mb-5" />
     </div>
     <Card className="w-full max-w-4xl border-purple-500 mx-auto">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl text-[#A78BFA] font-bold font-gloock">Major Events Registration</CardTitle>
        <CardDescription className="text-lg font-inclusive-sans">Register for Oneiros events: Destival, Requiem, and Cosmos</CardDescription>
      </CardHeader>
      <CardContent>
        <StepIndicator steps={steps} currentStep={currentStep} />
        <form onSubmit={handleSubmit}>
          {currentStep === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 ">
                  <Label htmlFor="teamLeader">Team Leader *</Label>
                  <Input
                    id="teamLeader"
                    name="teamLeader"
                    value={formData.teamLeader}
                    onChange={handleInputChange}
                    className="border-purple-400"
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamLeaderEmail">Team Leader Email *</Label>
                  <Input
                    id="teamLeaderEmail"
                    name="teamLeaderEmail"
                    type="email"
                    value={formData.teamLeaderEmail}
                    onChange={handleInputChange}
                    className="border-purple-400"
                    required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teamLeaderContact">Team Leader Contact Number *</Label>
                  <Input
                    id="teamLeaderContact"
                    name="teamLeaderContact"
                    type="tel"
                    value={formData.teamLeaderContact}
                    onChange={handleInputChange}
                    className="border-purple-400"
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamLeaderIdCard">Team Leader's College ID Card (Drive Link) *</Label>
                  <Input
                    id="teamLeaderIdCard"
                    name="teamLeaderIdCard"
                    type="url"
                    value={formData.teamLeaderIdCard}
                    onChange={handleInputChange}
                    className="border-purple-400"
                    required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="collegeName">College Name *</Label>
                  <Input
                    id="collegeName"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="border-purple-400"
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="collegeRegion">Region/State of College</Label>
                  <Input
                    id="collegeRegion"
                    name="collegeRegion"
                    value={formData.collegeRegion}
                    onChange={handleInputChange}
                    className="border-purple-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Team Name *</Label>
                  <Input
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    className="border-purple-400"
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamMembersCount">Number of Team Members *</Label>
                  <Input
                    id="teamMembersCount"
                    name="teamMembersCount"
                    type="number"
                    value={formData.teamMembersCount}
                    onChange={handleInputChange}
                    className="border-purple-400"
                    required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="teamMembersNames">Name of Team Members (Add all the names) *</Label>
                <Textarea
                  id="teamMembersNames"
                  name="teamMembersNames"
                  value={formData.teamMembersNames}
                  onChange={handleInputChange}
                  className="border-purple-400"
                  required />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label  htmlFor="selectedEvent">Select Event *</Label>
                <Select name="selectedEvent" onValueChange={(value) => handleSelectChange(value, "selectedEvent")}>
                  <SelectTrigger >
                    <SelectValue placeholder="Select an event" />
                  </SelectTrigger>
                  <SelectContent className="bg-purple-100 border border-purple-400 rounded-lg shadow-lg">
                    {events.map((event) => (
                      <SelectItem key={event.name} value={event.name} className="px-3 py-2 text-purple-500 hover:bg-purple-800 hover:text-purple-800 transition-all duration-300">
                        {event.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {formData.selectedEvent && (
                <Card>
                  <CardHeader>
                    <CardTitle>{formData.selectedEvent}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{events.find((e) => e.name === formData.selectedEvent)?.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="entryLink">Upload Your Entry Here (Post Link) *</Label>
                <Input
                  id="entryLink"
                  name="entryLink"
                  type="url"
                  value={formData.entryLink}
                  onChange={handleInputChange}
                  required />
              </div>
            </div>
          )}

<div className="flex justify-between mt-6">
  {/* Previous Button */}
  <Button
    type="button"
    onClick={handlePrevious}
    disabled={currentStep === 0}
    className={`relative px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 ease-in-out transform
      ${
        currentStep === 0
          ? "bg-purple-300 cursor-not-allowed"
          : "bg-purple-500 hover:bg-purple-600 shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 active:scale-95"
      }`}
  >
    Previous
  </Button>

  {/* Next or Submit Button */}
  {currentStep < steps.length - 1 ? (
    <Button
      type="button"
      onClick={handleNext}
      className="relative px-10 py-4 text-white text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out transform
      bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700
      shadow-lg hover:shadow-[0_0_15px_rgba(128,0,128,0.7)] hover:-translate-y-1 active:scale-95"
    >
      Next
    </Button>
  ) : (
    <Button
      type="submit"
      className="relative px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 ease-in-out transform
      bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800
      shadow-lg hover:shadow-[0_0_15px_rgba(0,255,0,0.7)] hover:-translate-y-1 active:scale-95"
    >
      Submit
    </Button>
  )}
</div>


        </form>
      </CardContent>
    </Card></>
    
  )
}

