const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={40}
      height={32}
      viewBox="0 0 24 24"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        style={{
          fill: 'none',
          stroke: 'var(--gradient-start)', // <-- ใช้ตัวแปร CSS แทนสีตรงๆ
          strokeMiterlimit: 10,
          strokeWidth: '1.87px',
        }}
        d="M19.5 12v4.67l-10.27 5.6-3.73-2.8V1.73L9.23 3.6v14l5.6-2.8-1.86-.93-.94-4.67z"
      />
    </svg>
  )
}

export default Logo
