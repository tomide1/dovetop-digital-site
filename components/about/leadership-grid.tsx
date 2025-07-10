'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { TeamMember } from '@/data/about/team'

interface LeadershipGridProps {
  team: TeamMember[]
}

// Modal component for team member details
const LeadershipModal = ({
  member,
  isOpen,
  onClose,
}: {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !member) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      data-testid='leadership-modal'
    >
      {/* Backdrop */}
      <div
        className='absolute inset-0 bg-black bg-opacity-50'
        data-testid='modal-backdrop'
        onClick={onClose}
      />

      {/* Modal content */}
      <div className='relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl'
          data-testid='modal-close-button'
          aria-label='Close modal'
        >
          ×
        </button>

        <div className='p-8'>
          <div className='flex flex-col md:flex-row gap-6'>
            {/* Profile image */}
            <div className='flex-shrink-0'>
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className='w-48 h-48 rounded-lg object-cover mx-auto'
              />
            </div>

            {/* Content */}
            <div className='flex-1'>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                {member.name}
              </h3>
              <p className='text-lg text-blue-600 font-semibold mb-4'>
                {member.role}
              </p>
              <p className='text-gray-600 leading-relaxed'>{member.bio}</p>

              {/* Social links (if available) */}
              {(member.linkedIn || member.twitter) && (
                <div className='flex gap-4 mt-6'>
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:text-blue-800'
                    >
                      Twitter
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LeadershipGrid({ team }: LeadershipGridProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMember(null)
  }

  return (
    <>
      <section
        className='bg-white py-16 md:py-24'
        role='region'
        aria-labelledby='leadership-title'
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <h2
              id='leadership-title'
              className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'
            >
              Our Leadership Team
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Meet the experienced leaders who guide our vision and drive our
              success.
            </p>
          </div>

          <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            data-testid='leadership-grid'
          >
            {team.map((member, index) => (
              <div
                key={member.id}
                className='bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer'
                data-testid={`member-card-${index}`}
                onClick={() => openModal(member)}
              >
                <div className='mb-4'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className='w-24 h-24 rounded-full object-cover mx-auto'
                  />
                </div>

                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {member.name}
                </h3>

                <p className='text-blue-600 font-medium mb-4'>{member.role}</p>

                <button className='text-blue-600 hover:text-blue-800 font-medium'>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <LeadershipModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}
