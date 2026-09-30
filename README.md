# @authoritydmc/react-ui

> Modern, accessible, and themeable React UI components with full TypeScript support, Tailwind CSS integration, and zero bundle bloat.

[![npm version](https://img.shields.io/npm/v/@authoritydmc/react-ui.svg)](https://www.npmjs.com/package/@authoritydmc/react-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## 📦 Installation

```bash
npm install @authoritydmc/react-ui
# or
pnpm add @authoritydmc/react-ui
# or
yarn add @authoritydmc/react-ui
```

---

## 🚀 Components & Examples

### 1. Button

```tsx
import { Button } from '@authoritydmc/react-ui';

function Example() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="primary" isLoading>Saving...</Button>
    </div>
  );
}
```

### 2. Breadcrumbs

```tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@authoritydmc/react-ui';

function Navigation() {
  return (
    <Breadcrumb separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrent>
        <span>Settings</span>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
```

### 3. Modal / Dialog

```tsx
import { useState } from 'react';
import { Modal, Button } from '@authoritydmc/react-ui';

function EditUserModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Edit Profile"
        footer={
          <>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>Save Changes</Button>
          </>
        }
      >
        <p>Enter your updated account details below.</p>
      </Modal>
    </>
  );
}
```

### 4. Input

```tsx
import { Input } from '@authoritydmc/react-ui';

function Form() {
  return (
    <Input
      label="Email Address"
      placeholder="alex@company.com"
      helperText="We'll never share your email."
    />
  );
}
```

### 5. Badge & Card

```tsx
import { Badge, Card, CardHeader, CardTitle, CardBody } from '@authoritydmc/react-ui';

function StatusCard() {
  return (
    <Card variant="light">
      <CardHeader>
        <CardTitle>Deployment Status</CardTitle>
        <Badge variant="success" dot>Live</Badge>
      </CardHeader>
      <CardBody>
        <p>Production cluster healthy on region us-east-1.</p>
      </CardBody>
    </Card>
  );
}
```

### 6. CodeViewer

```tsx
import { CodeViewer } from '@authoritydmc/react-ui';

function Docs() {
  return (
    <CodeViewer
      code={`npm install @authoritydmc/react-ui`}
      language="bash"
    />
  );
}
```

---

## 🛠 Available Components

- `<Button />` (variants, sizes, loading spinners, icons)
- `<Breadcrumb />`, `<BreadcrumbItem />`, `<BreadcrumbLink />`, `<BreadcrumbEllipsis />`
- `<Modal />` (accessible dialog with backdrop and ESC support)
- `<Input />` (labels, error messages, prefix/suffix icons)
- `<Badge />` (pill tags with optional status indicator dot)
- `<Card />`, `<CardHeader />`, `<CardTitle />`, `<CardBody />`, `<CardFooter />`
- `<Tooltip />` (hover tooltips with 4-way positioning)
- `<Progress />` (progress bar with title, status, and elapsed timer)
- `<CodeViewer />` (syntax-formatted code block with one-click clipboard copy)

---

## 📄 License

MIT © Raj Dubey
