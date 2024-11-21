import { create } from 'zustand';
import type { RBACStore, User, Role } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@vrvsecurity.com',
    roleId: '1',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=facearea&facepad=2',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@vrvsecurity.com',
    roleId: '2',
    status: 'active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=facearea&facepad=2',
  },
];

const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: ['read', 'write', 'delete', 'manage_users', 'manage_roles'],
  },
  {
    id: '2',
    name: 'User',
    description: 'Basic access',
    permissions: ['read'],
  },
];

export const useRBACStore = create<RBACStore>((set) => ({
  users: mockUsers,
  roles: mockRoles,
  selectedUser: null,
  selectedRole: null,
  
  addUser: (user) => set((state) => ({
    users: [...state.users, { ...user, id: crypto.randomUUID() }],
  })),
  
  updateUser: (id, updatedUser) => set((state) => ({
    users: state.users.map((user) => 
      user.id === id ? { ...user, ...updatedUser } : user
    ),
  })),
  
  deleteUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id),
  })),
  
  addRole: (role) => set((state) => ({
    roles: [...state.roles, { ...role, id: crypto.randomUUID() }],
  })),
  
  updateRole: (id, updatedRole) => set((state) => ({
    roles: state.roles.map((role) => 
      role.id === id ? { ...role, ...updatedRole } : role
    ),
  })),
  
  deleteRole: (id) => set((state) => ({
    roles: state.roles.filter((role) => role.id !== id),
  })),
  
  setSelectedUser: (user) => set({ selectedUser: user }),
  setSelectedRole: (role) => set({ selectedRole: role }),
}));