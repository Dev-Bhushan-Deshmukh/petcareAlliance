import { motion } from 'framer-motion'
import React from 'react'
import { Searchbar } from './Searchbar'
import { HistoryItem } from './HistoryItem'

export const History = () => {

  const petHistoryData = [
    {
      petName: "Jully",
      petImage: "https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?ixlib=rb-4.0.3",
      serviceType: "Home care",
      activity: "Feeding",
      caregiver: "John Wellson",
      scheduledDate: "12/09/1997",
      completionDate: "12/09/1997",
      notesCount: 3,
      status: "COMPLETE"
    },
    {
      petName: "Buddy",
      petImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      serviceType: "Pet Walking",
      activity: "Walk",
      caregiver: "Emily Harper",
      scheduledDate: "11/12/1998",
      completionDate: "11/12/1998",
      notesCount: 2,
      status: "COMPLETE"
    },
    {
      petName: "Max",
      petImage: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8",
      serviceType: "Grooming",
      activity: "Fur Trimming",
      caregiver: "Steve Randall",
      scheduledDate: "05/20/2000",
      completionDate: "05/21/2000",
      notesCount: 1,
      status: "IN PROGRESS"
    },
    {
      petName: "Bella",
      petImage: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
      serviceType: "Pet Sitting",
      activity: "Overnight Care",
      caregiver: "Laura Greene",
      scheduledDate: "02/10/2005",
      completionDate: "02/11/2005",
      notesCount: 4,
      status: "COMPLETE"
    },
    {
      petName: "Lucy",
      petImage: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b6",
      serviceType: "Veterinary Check",
      activity: "Vaccination",
      caregiver: "Dr. Sam Oliver",
      scheduledDate: "08/15/2010",
      completionDate: "08/15/2010",
      notesCount: 5,
      status: "CANCELLED"
    },
    {
      petName: "Rocky",
      petImage: "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
      serviceType: "Training",
      activity: "Obedience",
      caregiver: "Mark Wilson",
      scheduledDate: "03/30/2013",
      completionDate: "04/01/2013",
      notesCount: 2,
      status: "IN PROGRESS"
    },
    {
      petName: "Daisy",
      petImage: "https://images.unsplash.com/photo-1556228911-8c64f3fc5b31",
      serviceType: "Home care",
      activity: "Medication",
      caregiver: "Linda Brown",
      scheduledDate: "09/18/2017",
      completionDate: "09/18/2017",
      notesCount: 1,
      status: "COMPLETE"
    },
    {
      petName: "Charlie",
      petImage: "https://images.unsplash.com/photo-1506947411547-75a3b5166cbb",
      serviceType: "Grooming",
      activity: "Nail Trimming",
      caregiver: "Rachel James",
      scheduledDate: "07/23/2019",
      completionDate: "07/23/2019",
      notesCount: 3,
      status: "COMPLETE"
    },
    {
      petName: "Oscar",
      petImage: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      serviceType: "Pet Sitting",
      activity: "Day Care",
      caregiver: "Michael Lee",
      scheduledDate: "10/05/2020",
      completionDate: "10/05/2020",
      notesCount: 2,
      status: "PENDING"
    },
    {
      petName: "Milo",
      petImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      serviceType: "Training",
      activity: "Agility Training",
      caregiver: "Alex Carter",
      scheduledDate: "12/14/2022",
      completionDate: "12/20/2022",
      notesCount: 6,
      status: "COMPLETE"
    }
  ];
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  //Specified Exit animation
    exit={{ opacity: 0, y: 0 }} className=' h-[92%]  w-full'>
<div className='h-[5%] w-full '>
<Searchbar  width={50} />

</div>


<div className='h-[95%] w-full overflow-y-auto '>
  {petHistoryData.map((item,index)=><HistoryItem  key={index} data={item} />)}

  {/* filter by pet,service,date,serive type,status  ,sort by date , count icon, select or select all print
petname,service name-pic,date-s,e-date,service type,note,open icon,archive,status,chat */}

</div>

    </motion.div>
  )
}
