import { Button, Input } from 'antd'


export default function Home() {
  return (
    <div className='flex items-center justify-center flex-col gap-10 h-screen'>
      <h1>Inicio</h1>

      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Input placeholder="Basic Usage"
        className='w-40' />

    </div>
  );
}
