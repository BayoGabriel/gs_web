import { Avatar } from '../../components/ui/Avatar'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Checkbox } from '../../components/ui/Checkbox'
import { Input } from '../../components/ui/Input'
import { Select } from '../../components/ui/Select'
import { Switch } from '../../components/ui/Switch'
import { KitBlock, KitRow } from './KitBlock'

export function PrimitivesDemo() {
  return (
    <>
      <KitBlock id="button" title="Button">
        <KitRow>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </KitRow>
        <KitRow>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
        </KitRow>
        <KitRow>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </KitRow>
      </KitBlock>
      <KitBlock id="badge" title="Badge">
        <KitRow>
          <Badge>Neutral</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="inverted">Inverted</Badge>
          <Badge status="pending">Pending</Badge>
          <Badge status="completed">Completed</Badge>
          <Badge status="failed">Failed</Badge>
        </KitRow>
      </KitBlock>
      <KitBlock id="avatar" title="Avatar">
        <KitRow>
          <Avatar name="Amara Osei" size={24} />
          <Avatar name="Amara Osei" size={32} />
          <Avatar name="Swift Footwear" kind="org" size={40} />
          <Avatar name="Swift Footwear" kind="org" size={56} />
        </KitRow>
      </KitBlock>
      <KitBlock id="input" title="Input, Select, Checkbox, Switch">
        <div className="grid max-w-2xl gap-6 sm:grid-cols-2">
          <Input label="Default" placeholder="you@example.com" />
          <Input label="With error" error="Enter a valid email address." defaultValue="not-an-email" />
          <Input label="With hint" hint="Shown on your storefront." placeholder="Store name" />
          <Select
            label="Select"
            options={[
              { value: 'a', label: 'Option A' },
              { value: 'b', label: 'Option B' },
            ]}
          />
          <Checkbox label="Checkbox" hint="Unchecked state" />
          <Checkbox label="Checkbox" defaultChecked hint="Checked state" />
          <Switch label="Switch off" />
          <Switch label="Switch on" defaultChecked />
        </div>
      </KitBlock>
    </>
  )
}
