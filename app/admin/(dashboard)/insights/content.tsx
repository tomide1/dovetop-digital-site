"use client";

import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  Textarea,
  TextInput,
  Select,
} from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  HiChevronLeft,
  HiChevronRight,
  HiCog,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiPencilAlt,
  HiTrash,
} from "react-icons/hi";
import type { InsightsPageData } from "./page";
import type { InsightData } from "@/types/data/insights";

const InsightsPageContent: FC<InsightsPageData> = function ({
  data,
}) {
  return (
    <>
      <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 sm:flex dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <Breadcrumb className="mb-5">
              <Breadcrumb.Item href="#">
                <div className="flex items-center gap-x-3">
                  <HiHome className="text-xl" />
                  <span className="dark:text-white">Home</span>
                </div>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/admin/insights">
                Insights
              </Breadcrumb.Item>
            </Breadcrumb>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              All Insights
            </h1>
          </div>
          <div className="block items-center sm:flex">
            <SearchForInsights />
            <div className="hidden space-x-1 border-l border-gray-100 pl-2 md:flex dark:border-gray-700">
              <Link
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Configure</span>
                <HiCog className="text-2xl" />
              </Link>
              <Link
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Delete</span>
                <HiTrash className="text-2xl" />
              </Link>
              <Link
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Purge</span>
                <HiExclamationCircle className="text-2xl" />
              </Link>
              <Link
                href="#"
                className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Settings</span>
                <HiDotsVertical className="text-2xl" />
              </Link>
            </div>
            <div className="flex w-full items-center sm:justify-end">
              <AddInsightModal />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <InsightsTable data={data} />
            </div>
          </div>
        </div>
      </div>
      <TableNavigation />
    </>
  );
};

const SearchForInsights: FC = function () {
  return (
    <form className="mb-4 sm:mb-0 sm:pr-3" action="#" method="GET">
      <Label htmlFor="insights-search" className="sr-only">
        Search
      </Label>
      <div className="relative mt-1 sm:w-64 xl:w-96">
        <TextInput
          id="insights-search"
          name="insights-search"
          placeholder="Search for insights"
        />
      </div>
    </form>
  );
};

const AddInsightModal: FC = function () {
  const [isOpen, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    cover_image: '',
    featured: false
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const result = await response.json();
        setFormData(prev => ({ ...prev, cover_image: result.url }));
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString()
        }),
      });
      
      if (response.ok) {
        console.log('Insight created successfully');
        setFormData({
          title: '',
          slug: '',
          excerpt: '',
          content: '',
          category: '',
          cover_image: '',
          featured: false
        });
        setOpen(false);
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error('Failed to create insight:', errorData.error);
        alert('Failed to create insight: ' + errorData.error);
      }
    } catch (error) {
      console.error('Error creating insight:', error);
    }
  };

  return (
    <>
      <Button color="blue" onClick={() => setOpen(!isOpen)}>
        <FaPlus className="mr-3 text-sm" />
        Add insight
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen} size="4xl">
        <Modal.Header className="border-b border-gray-200 dark:border-gray-700">
          Add insight
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <TextInput
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="Insight title"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="slug">Slug</Label>
                <TextInput
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  placeholder="insight-slug"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="User-Centered Design">User-Centered Design</option>
                  <option value="Data Analytics & ML">Data Analytics & ML</option>
                  <option value="Security & Governance">Security & Governance</option>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cover_image">Cover Image</Label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
                  {formData.cover_image && (
                    <p className="text-sm text-green-600">Image uploaded successfully</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  placeholder="Brief description of the insight"
                  rows={3}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Full insight content (Markdown supported)"
                  rows={8}
                  required
                />
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                />
                <Label htmlFor="featured">Featured insight</Label>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={handleSubmit}>
            Add insight
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const EditInsightModal: FC<{ insight: InsightData }> = function ({ insight }) {
  const [isOpen, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: insight.title,
    slug: insight.slug,
    excerpt: insight.excerpt,
    content: insight.content,
    category: insight.category,
    cover_image: insight.cover_image,
    featured: insight.featured
  });

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const result = await response.json();
        setFormData(prev => ({ ...prev, cover_image: result.url }));
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/insights/${insight.id || 0}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Insight updated successfully');
        setOpen(false);
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error('Failed to update insight:', errorData.error);
        alert('Failed to update insight: ' + errorData.error);
      }
    } catch (error) {
      console.error('Error updating insight:', error);
    }
  };

  return (
    <>
      <Button size="sm" color="blue" onClick={() => setOpen(!isOpen)}>
        <HiPencilAlt className="mr-2 h-5 w-5" />
        Edit item
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen} size="4xl">
        <Modal.Header>Edit insight</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <TextInput
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="slug">Slug</Label>
                <TextInput
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  required
                >
                  <option value="Cloud Solutions">Cloud Solutions</option>
                  <option value="User-Centered Design">User-Centered Design</option>
                  <option value="Data Analytics & ML">Data Analytics & ML</option>
                  <option value="Security & Governance">Security & Governance</option>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cover_image">Cover Image</Label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
                  {formData.cover_image && (
                    <p className="text-sm text-green-600">Current image: {formData.cover_image}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  rows={3}
                  required
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows={8}
                  required
                />
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                />
                <Label htmlFor="featured">Featured insight</Label>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={handleSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const DeleteInsightModal: FC<{ insight: InsightData }> = function ({ insight }) {
  const [isOpen, setOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/insights/${insight.id || 0}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        console.log('Insight deleted successfully');
        setOpen(false);
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error('Failed to delete insight:', errorData.error);
        alert('Failed to delete insight: ' + errorData.error);
      }
    } catch (error) {
      console.error('Error deleting insight:', error);
    }
  };

  return (
    <>
      <Button
        size="sm"
        color="failure"
        className="!bg-red-700"
        onClick={() => setOpen(!isOpen)}
      >
        <HiTrash className="mr-2 h-5 w-5" />
        Delete item
      </Button>
      <Modal onClose={() => setOpen(false)} show={isOpen} size="md">
        <Modal.Header className="border-none p-2">
          <span className="sr-only">Delete insight</span>
        </Modal.Header>
        <Modal.Body className="px-6 pb-6 pt-0">
          <div className="flex flex-col items-center gap-y-6 text-center">
            <HiOutlineExclamationCircle className="mx-auto h-20 w-20 text-red-600" />
            <p className="text-xl font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete "{insight.title}"?
            </p>
            <div className="flex items-center gap-x-3">
              <Button
                color="failure"
                theme={{ base: "px-0" }}
                onClick={handleDelete}
              >
                <span className="text-base font-medium">Yes, I'm sure</span>
              </Button>
              <Button
                color="gray"
                theme={{ base: "px-0" }}
                onClick={() => setOpen(false)}
              >
                <span className="text-base font-medium">No, cancel</span>
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const InsightsTable: FC<InsightsPageData> = function ({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-gray-500 dark:text-gray-400">No insights found.</p>
      </div>
    );
  }

  return (
    <Table
      className="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
      theme={{
        head: {
          base: "bg-gray-100 dark:bg-gray-700",
          cell: {
            base: "p-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400",
          },
        },
        body: {
          cell: {
            base: "rounded-none",
          },
        },
      }}
    >
      <Table.Head className="bg-gray-100 dark:bg-gray-700">
        <Table.HeadCell>
          <span className="sr-only">Toggle selected</span>
          <Checkbox />
        </Table.HeadCell>
        <Table.HeadCell>Title</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
        <Table.HeadCell>Featured</Table.HeadCell>
        <Table.HeadCell>Actions</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
        {data.map((insight) => (
          <Table.Row
            key={insight.id}
            className="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Table.Cell className="w-4 p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                {insight.title}
              </div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-400 max-w-xs truncate">
                {insight.excerpt}
              </div>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              {insight.category}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
              {new Date(insight.created_at).toLocaleDateString()}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap p-4">
              {insight.featured ? (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Featured
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  Regular
                </span>
              )}
            </Table.Cell>
            <Table.Cell className="space-x-2 whitespace-nowrap p-4">
              <div className="flex items-center gap-x-3">
                <EditInsightModal insight={insight} />
                <DeleteInsightModal insight={insight} />
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

function TableNavigation() {
  return (
    <div className="sticky bottom-0 right-0 w-full items-center border-t border-gray-200 bg-white p-4 sm:flex sm:justify-between dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-4 flex items-center sm:mb-0">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <HiChevronLeft className="h-7 w-7" />
        </a>
        <a
          href="#"
          className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <HiChevronRight className="h-7 w-7" />
        </a>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            8
          </span>
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <Button color="blue" size="sm" href="#">
          <HiChevronLeft className="-ml-1 mr-1 h-5 w-5" />
          Previous
        </Button>
        <Button color="blue" size="sm" href="#">
          Next
          <HiChevronRight className="-mr-1 ml-1 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default InsightsPageContent;