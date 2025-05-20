import Image from 'next/image'

interface ServiceCardTypes {
  titles: string[]
  icons: string[]
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ titles, icons }) => {
  return (
    <div className="bg-secondary border-border flex flex-row flex-wrap items-center rounded-[14px] border p-5">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="border-accent m-2 flex flex-col items-center rounded-[14px] border-2 p-2">
          <Image src={icon} alt={`icon-${index}`} width={48} height={48} className="my-1 size-12" />
          <h5 className="text-accent mt-2 text-center text-base font-semibold">{titles[index]}</h5>
        </div>
      ))}
    </div>
  )
}

export default ServiceCard
