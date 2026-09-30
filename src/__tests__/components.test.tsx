import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Modal,
  Input,
  Tooltip,
  Progress,
  CodeViewer,
} from '../index';

describe('@authoritydmc/react-ui Components', () => {
  it('renders Button with variants and handles click', () => {
    const handleClick = vi.fn();
    render(
      <Button variant="primary" size="md" onClick={handleClick}>
        Click Me
      </Button>
    );

    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeTruthy();
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders Badge with dot and variant', () => {
    render(
      <Badge variant="success" dot>
        Active
      </Badge>
    );

    expect(screen.getByText('Active')).toBeTruthy();
  });

  it('renders Card with header and body', () => {
    render(
      <Card variant="light">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardBody>Card content here</CardBody>
      </Card>
    );

    expect(screen.getByText('Overview')).toBeTruthy();
    expect(screen.getByText('Card content here')).toBeTruthy();
  });

  it('renders Breadcrumb with links and current item', () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          <span>Buttons</span>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Buttons')).toBeTruthy();
  });

  it('renders Modal dialog when open and triggers onClose', () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        <p>Modal body</p>
      </Modal>
    );

    expect(screen.getByText('Test Modal')).toBeTruthy();
    expect(screen.getByText('Modal body')).toBeTruthy();
    const closeBtn = screen.getByLabelText(/close dialog/i);
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('renders Input with label and error', () => {
    render(<Input label="Email" error="Invalid email address" placeholder="user@example.com" />);

    expect(screen.getByLabelText('Email')).toBeTruthy();
    expect(screen.getByText('Invalid email address')).toBeTruthy();
  });

  it('renders Tooltip on hover', () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover target</button>
      </Tooltip>
    );

    const btn = screen.getByText('Hover target');
    fireEvent.mouseEnter(btn);
    expect(screen.getByText('Tooltip text')).toBeTruthy();
  });

  it('renders Progress bar', () => {
    render(<Progress progress={75} title="Uploading" />);
    expect(screen.getByText('75%')).toBeTruthy();
    expect(screen.getByText('Uploading')).toBeTruthy();
  });

  it('renders CodeViewer with copy button', () => {
    render(<CodeViewer code="const x = 10;" language="typescript" />);
    expect(screen.getByText('const x = 10;')).toBeTruthy();
    expect(screen.getByText('typescript')).toBeTruthy();
  });
});
