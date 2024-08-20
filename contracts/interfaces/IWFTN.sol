// SPDX-License-Identifier: MIT

// Copyright (C) 2024 Fasttoken

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

pragma solidity ^0.8.6;

interface IWFTN {

    receive() external payable;
    function deposit() external payable;

    function withdraw(uint256 amount_) external;
    
    function balanceOf(address account) external view returns (uint256);

    function totalSupply() external view returns (uint256);

    function approve(address to_, uint256 amount_) external returns (bool);

    function transfer(address to_, uint256 amount_) external returns (bool);

    function transferFrom(address src_, address to_, uint256 amount_)
        external
        returns (bool);
}
        