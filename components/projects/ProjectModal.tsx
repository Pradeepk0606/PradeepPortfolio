"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { Project } from "./ProjectCard";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  project?: Project;
}

export default function ProjectModal({ open, onClose, project }: ModalProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto p-4">
          <div className="mx-auto max-w-3xl">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200" enterFrom="opacity-0 translate-y-4" enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-150" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="rounded-2xl border border-border/60 bg-background p-6 shadow-xl">
                <Dialog.Title className="text-xl font-semibold">{project?.title}</Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-muted-foreground">{project?.summary}</Dialog.Description>

                <div className="mt-4 grid gap-4">
                  <section>
                    <h4 className="text-sm font-medium">Problem</h4>
                    <p className="text-sm text-muted-foreground">{project?.details.problem}</p>
                  </section>
                  <section>
                    <h4 className="text-sm font-medium">Role</h4>
                    <p className="text-sm text-muted-foreground">{project?.details.role}</p>
                  </section>
                  <section>
                    <h4 className="text-sm font-medium">Architecture</h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">{project?.details.architecture}</p>
                  </section>
                  <section>
                    <h4 className="text-sm font-medium">Key Commits</h4>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">
                      {project?.details.keyCommits.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-sm font-medium">README Excerpt</h4>
                    <pre className="whitespace-pre-wrap rounded-md bg-muted p-3 text-xs">{project?.details.readme}</pre>
                  </section>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                  <Button variant="secondary" onClick={onClose} autoFocus aria-label="Close project details">Close</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
